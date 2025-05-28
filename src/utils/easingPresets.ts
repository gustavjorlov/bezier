import { EasingPreset } from '../types';

export const easingPresets: EasingPreset[] = [
  // CSS Built-in easings
  {
    name: 'linear',
    displayName: 'Linear',
    p1: { x: 0, y: 0 },
    p2: { x: 1, y: 1 },
    description: 'Constant speed throughout'
  },
  {
    name: 'ease',
    displayName: 'Ease',
    p1: { x: 0.25, y: 0.1 },
    p2: { x: 0.25, y: 1 },
    description: 'Default CSS ease'
  },
  {
    name: 'ease-in',
    displayName: 'Ease In',
    p1: { x: 0.42, y: 0 },
    p2: { x: 1, y: 1 },
    description: 'Slow start, fast end'
  },
  {
    name: 'ease-out',
    displayName: 'Ease Out',
    p1: { x: 0, y: 0 },
    p2: { x: 0.58, y: 1 },
    description: 'Fast start, slow end'
  },
  {
    name: 'ease-in-out',
    displayName: 'Ease In Out',
    p1: { x: 0.42, y: 0 },
    p2: { x: 0.58, y: 1 },
    description: 'Slow start and end'
  },
  
  // Popular cubic-bezier curves
  {
    name: 'ease-in-quad',
    displayName: 'Ease In Quad',
    p1: { x: 0.11, y: 0 },
    p2: { x: 0.5, y: 0 },
    description: 'Quadratic ease in'
  },
  {
    name: 'ease-out-quad',
    displayName: 'Ease Out Quad',
    p1: { x: 0.5, y: 1 },
    p2: { x: 0.89, y: 1 },
    description: 'Quadratic ease out'
  },
  {
    name: 'ease-in-cubic',
    displayName: 'Ease In Cubic',
    p1: { x: 0.32, y: 0 },
    p2: { x: 0.67, y: 0 },
    description: 'Cubic ease in'
  },
  {
    name: 'ease-out-cubic',
    displayName: 'Ease Out Cubic',
    p1: { x: 0.33, y: 1 },
    p2: { x: 0.68, y: 1 },
    description: 'Cubic ease out'
  },
  {
    name: 'ease-in-quart',
    displayName: 'Ease In Quart',
    p1: { x: 0.5, y: 0 },
    p2: { x: 0.75, y: 0 },
    description: 'Quartic ease in'
  },
  {
    name: 'ease-out-quart',
    displayName: 'Ease Out Quart',
    p1: { x: 0.25, y: 1 },
    p2: { x: 0.5, y: 1 },
    description: 'Quartic ease out'
  },
  {
    name: 'ease-in-back',
    displayName: 'Ease In Back',
    p1: { x: 0.6, y: -0.28 },
    p2: { x: 0.735, y: 0.045 },
    description: 'Back up then forward'
  },
  {
    name: 'ease-out-back',
    displayName: 'Ease Out Back',
    p1: { x: 0.175, y: 0.885 },
    p2: { x: 0.32, y: 1.275 },
    description: 'Forward then back'
  }
]; 