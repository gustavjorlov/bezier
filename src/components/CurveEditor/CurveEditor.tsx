import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useEasingState } from '../../hooks/useEasingState';
import { Point } from '../../types';
import { constrainPoint } from '../../utils/urlManager';
import styles from './CurveEditor.module.css';

interface CurveEditorProps {
  width?: number;
  height?: number;
}

export const CurveEditor: React.FC<CurveEditorProps> = ({ 
  width = 400, 
  height = 300 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, dispatch } = useEasingState();
  const [isDragging, setIsDragging] = useState<'p1' | 'p2' | null>(null);
  const [dragOffset, setDragOffset] = useState<Point>({ x: 0, y: 0 });

  // Setup canvas for high-DPI displays
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    
    // Set the actual canvas size in memory (scaled by device pixel ratio)
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    // Set the CSS size to maintain the intended display size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    // Scale the drawing context to match the device pixel ratio
    ctx.scale(dpr, dpr);
    
    // Enable crisp rendering
    ctx.imageSmoothingEnabled = false;
  }, [width, height]);

  // Convert canvas coordinates to bezier coordinates (0-1 range)
  const canvasToEasing = useCallback((canvasX: number, canvasY: number): Point => {
    const padding = 40;
    const effectiveWidth = width - (padding * 2);
    const effectiveHeight = height - (padding * 2);
    
    return {
      x: Math.max(0, Math.min(1, (canvasX - padding) / effectiveWidth)),
      y: (effectiveHeight - (canvasY - padding)) / effectiveHeight
    };
  }, [width, height]);

  // Convert bezier coordinates to canvas coordinates
  const easingToCanvas = useCallback((point: Point): Point => {
    const padding = 40;
    const effectiveWidth = width - (padding * 2);
    const effectiveHeight = height - (padding * 2);
    
    return {
      x: padding + (point.x * effectiveWidth),
      y: padding + (effectiveHeight - (point.y * effectiveHeight))
    };
  }, [width, height]);

  // Draw the bezier curve and control points
  const drawCurve = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const padding = 40;
    const effectiveWidth = width - (padding * 2);
    const effectiveHeight = height - (padding * 2);

    // Enable crisp lines
    ctx.translate(0.5, 0.5);

    // Draw grid
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
      const x = Math.floor(padding + (i / 10) * effectiveWidth);
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + effectiveHeight);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = Math.floor(padding + (i / 10) * effectiveHeight);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + effectiveWidth, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, Math.floor(padding + effectiveHeight));
    ctx.lineTo(padding + effectiveWidth, Math.floor(padding + effectiveHeight));
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(Math.floor(padding), padding);
    ctx.lineTo(Math.floor(padding), padding + effectiveHeight);
    ctx.stroke();

    // Reset translation
    ctx.translate(-0.5, -0.5);

    // Convert control points to canvas coordinates
    const startPoint = { x: padding, y: padding + effectiveHeight };
    const endPoint = { x: padding + effectiveWidth, y: padding };
    const cp1 = easingToCanvas(state.p1);
    const cp2 = easingToCanvas(state.p2);

    // Draw control lines
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(cp1.x, cp1.y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(endPoint.x, endPoint.y);
    ctx.lineTo(cp2.x, cp2.y);
    ctx.stroke();
    
    ctx.setLineDash([]);

    // Draw bezier curve
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, endPoint.x, endPoint.y);
    ctx.stroke();

    // Draw control points
    const pointRadius = 8;
    
    // P1 control point
    ctx.fillStyle = state.selectedControlPoint === 'p1' ? '#1d4ed8' : '#2563eb';
    ctx.beginPath();
    ctx.arc(cp1.x, cp1.y, pointRadius, 0, 2 * Math.PI);
    ctx.fill();
    
    // P1 label
    ctx.fillStyle = '#475569';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText('P1', cp1.x + 12, cp1.y);
    
    // P2 control point
    ctx.fillStyle = state.selectedControlPoint === 'p2' ? '#1d4ed8' : '#2563eb';
    ctx.beginPath();
    ctx.arc(cp2.x, cp2.y, pointRadius, 0, 2 * Math.PI);
    ctx.fill();
    
    // P2 label
    ctx.fillStyle = '#475569';
    ctx.fillText('P2', cp2.x + 12, cp2.y);

    // Draw start and end points
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(endPoint.x, endPoint.y, 4, 0, 2 * Math.PI);
    ctx.fill();

    // Axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    ctx.fillText('0', padding, padding + effectiveHeight + 8);
    ctx.fillText('1', padding + effectiveWidth, padding + effectiveHeight + 8);
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText('0', padding - 8, padding + effectiveHeight);
    ctx.fillText('1', padding - 8, padding);
    
    // Reset text alignment
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';
  }, [state, width, height, easingToCanvas]);

  // Handle mouse down on control points
  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;

    const cp1Canvas = easingToCanvas(state.p1);
    const cp2Canvas = easingToCanvas(state.p2);

    const distance1 = Math.sqrt(
      Math.pow(canvasX - cp1Canvas.x, 2) + Math.pow(canvasY - cp1Canvas.y, 2)
    );
    
    const distance2 = Math.sqrt(
      Math.pow(canvasX - cp2Canvas.x, 2) + Math.pow(canvasY - cp2Canvas.y, 2)
    );

    const threshold = 15;

    if (distance1 < threshold) {
      setIsDragging('p1');
      setDragOffset({
        x: canvasX - cp1Canvas.x,
        y: canvasY - cp1Canvas.y
      });
      dispatch({ type: 'SET_SELECTED_CONTROL_POINT', value: 'p1' });
    } else if (distance2 < threshold) {
      setIsDragging('p2');
      setDragOffset({
        x: canvasX - cp2Canvas.x,
        y: canvasY - cp2Canvas.y
      });
      dispatch({ type: 'SET_SELECTED_CONTROL_POINT', value: 'p2' });
    } else {
      dispatch({ type: 'SET_SELECTED_CONTROL_POINT', value: null });
    }
  }, [state.p1, state.p2, easingToCanvas, dispatch]);

  // Handle mouse move for dragging
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left - dragOffset.x;
    const canvasY = event.clientY - rect.top - dragOffset.y;

    const newPoint = constrainPoint(canvasToEasing(canvasX, canvasY));
    
    dispatch({
      type: 'SET_CONTROL_POINT',
      point: isDragging,
      value: newPoint
    });
  }, [isDragging, dragOffset, canvasToEasing, dispatch]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  // Set up global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (event: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const canvasX = event.clientX - rect.left - dragOffset.x;
        const canvasY = event.clientY - rect.top - dragOffset.y;

        const newPoint = constrainPoint(canvasToEasing(canvasX, canvasY));
        
        dispatch({
          type: 'SET_CONTROL_POINT',
          point: isDragging,
          value: newPoint
        });
      };

      const handleGlobalMouseUp = () => {
        setIsDragging(null);
        setDragOffset({ x: 0, y: 0 });
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, dragOffset, canvasToEasing, dispatch]);

  // Initialize canvas on mount and when dimensions change
  useEffect(() => {
    setupCanvas();
  }, [setupCanvas]);

  // Redraw when state changes
  useEffect(() => {
    drawCurve();
  }, [drawCurve]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!state.selectedControlPoint) return;

    const step = event.shiftKey ? 0.1 : 0.01;
    const currentPoint = state[state.selectedControlPoint];
    let newPoint = { ...currentPoint };

    switch (event.key) {
      case 'ArrowLeft':
        newPoint.x = Math.max(0, currentPoint.x - step);
        break;
      case 'ArrowRight':
        newPoint.x = Math.min(1, currentPoint.x + step);
        break;
      case 'ArrowUp':
        newPoint.y = currentPoint.y + step;
        break;
      case 'ArrowDown':
        newPoint.y = currentPoint.y - step;
        break;
      default:
        return;
    }

    event.preventDefault();
    dispatch({
      type: 'SET_CONTROL_POINT',
      point: state.selectedControlPoint,
      value: newPoint
    });
  }, [state.selectedControlPoint, state.p1, state.p2, dispatch]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="application"
        aria-label="Bezier curve editor"
      />
      <div className={styles.coordinates}>
        <div className={styles.coordinateGroup}>
          <span className={styles.coordinateLabel}>P1:</span>
          <span className={styles.coordinateValue}>
            ({state.p1.x.toFixed(3)}, {state.p1.y.toFixed(3)})
          </span>
        </div>
        <div className={styles.coordinateGroup}>
          <span className={styles.coordinateLabel}>P2:</span>
          <span className={styles.coordinateValue}>
            ({state.p2.x.toFixed(3)}, {state.p2.y.toFixed(3)})
          </span>
        </div>
      </div>
    </div>
  );
}; 