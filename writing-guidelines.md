# Uno Component Library Writing Guidelines

This document provides writing guidelines for developers working with the Uno component library. Following these guidelines will ensure consistent, accessible, and on-brand text across all components.

## Voice and Tone

When creating text for components, maintain a consistent voice that is:

- Clear and concise
- Professional but approachable
- Helpful without being patronizing
- Direct and action-oriented
- Confident, not arrogant
- Conversational, not casual

### Brand Voice Principles

Our voice should reflect these core principles:

#### 1. Simple
- Eliminate unnecessary complexity
- Use straightforward language
- Focus on what matters to the user

#### 2. Human
- Write as if you're talking to a real person
- Be warm but professional
- Avoid robotic or overly technical language

## Voice Characteristics

Our voice should be characterized by these qualities:

### Informed but Not Academic
- Share expertise without being overly academic
- Use accessible language that demonstrates knowledge
- Explain complex topics simply without oversimplifying
- Example: "This pattern indicates a potential vulnerability" rather than "The observed telemetry suggests the possibility of a security anomaly"

### Confident but Not Arrogant
- Be decisive in recommendations and guidance
- Avoid hedging language when certainty is appropriate
- Balance confidence with appropriate humility
- Example: "We recommend enabling two-factor authentication" rather than "You might want to consider enabling two-factor authentication if you think it would be helpful"

### Engaged but Not Anxious
- Be alert to threats without causing alarm
- Keep an even, measured tone in all communications
- Focus on solutions rather than escalating concerns
- Example: "This finding requires attention within 24 hours" rather than "URGENT THREAT DETECTED!"

### Direct but Not Bossy
- Be straightforward with instructions
- Give clear guidance without being commanding
- Respect user autonomy
- Example: "Add users in the Admin panel" rather than "You must add users in the Admin panel"

### Active vs. Passive Voice

Use active voice whenever possible. Active voice makes your writing more direct, clear, and engaging.

#### Active Voice (Preferred)
- "The system detected an error."
- "You must save your changes before exiting."
- "Enter your password to continue."

#### Passive Voice (Avoid)
- "An error was detected by the system."
- "Changes must be saved before exiting."
- "Password must be entered to continue."

### User Addressing

#### When data is specific to the organization
Use the organization name or "your organization" when referring to data that belongs to the organization.

#### When data is specific to the user: You, Your
Address the user directly when data or actions relate specifically to them.
- "Your dashboard"
- "Your recent activity"

#### When things are created/owned by the user: Me, My, Mine, us, our
Use first-person possessive pronouns for items created or controlled by the user.
- "My profile"
- "My settings"

#### When the system communicates with the user: You, Your
- "You have 3 new notifications."
- "Your password has been updated."

#### Referring to users: they/them/their
Use gender-neutral pronouns when referring to users.

### Capitalization

#### Title Case
Use title case for:
- Button labels
- Page titles
- Modal headers
- Navigation items

Title case capitalizes the first letter of each major word (nouns, pronouns, verbs, adjectives, adverbs) and leaves minor words (articles, conjunctions, prepositions under 5 letters) lowercase.

Example: "Save Your Changes" not "Save your changes"

#### Sentence Case
Use sentence case for:
- Body text
- Form labels
- Error messages
- Tooltips
- Descriptions

Sentence case capitalizes only the first word and proper nouns.

Example: "An error occurred while processing your request." not "An Error Occurred While Processing Your Request."

### Writing Style

#### Write Positively
- Use positive language rather than negative
- Focus on what can be done, not what can't
- Frame messages in terms of solutions, not problems

#### Start with the verb
For instructions and calls to action, start with a verb:
- "Create a new report" instead of "You can create a new report"
- "Select a date range" instead of "Please select a date range"

#### Be succinct
- Keep text concise and to the point
- Eliminate unnecessary words
- Aim for clarity over verbosity
- When in doubt, use fewer words

#### Don't ask questions in modal titles
- Use statements instead of questions in headings and titles
- Example: "Confirm deletion" not "Delete this item?"

#### Plain American English
- Use clear, simple language
- Avoid jargon except for common cybersecurity terms your users understand
- Write for an international audience

#### Avoid "please" or "thank you"
- In UI text, be direct without being impolite
- Example: "Enter your email" rather than "Please enter your email"

#### Avoid contractions
For maximum clarity, especially for non-native English speakers, avoid contractions in UI text.
- "Do not" instead of "Don't"
- "Cannot" instead of "Can't"

#### Avoid idioms and metaphors
Idioms and metaphors may not translate well for international audiences.

### Bulleted Lists
For bulleted lists:
- Start each item with a capital letter
- Use parallel structure (same grammatical form)
- End each item with a period if the items are complete sentences
- Don't use end punctuation for list items that are not complete sentences

### Labels
Keep labels concise and descriptive.

#### Table Column Labels
- Use nouns or short noun phrases
- Be consistent across the table
- Use title case

#### Filter Labels
- Use nouns or short noun phrases
- Be specific about what is being filtered

### Punctuation

#### Periods
- Use periods at the end of complete sentences
- Don't use periods for headings, titles, or short labels

#### Ampersands (&)
- Don't use ampersands in place of "and" in regular text
- May be used in UI where space is limited or in established terms

#### @ (at)
- Use @ when referring to usernames on platforms where this is standard
- Example: "@username"

#### + (plus sign)
- Use for addition or to indicate "and more"
- Use in feature names like "Export+"

#### Colons
- Use colons to introduce lists, explanations, or examples
- Example: "Filter by: Date, User, Action"

#### Oxford Commas
- Use Oxford commas (the comma before "and" in a list of three or more items)
- Example: "Filter by date, user, and action."

#### Em and En dashes
- Use em dashes (—) to set apart phrases—like this one—in a sentence
- Use en dashes (–) for ranges: "January–March"

#### Quotation Marks
- Use double quotation marks for direct quotes
- Use single quotation marks for quotes within quotes

#### Latin Abbreviations
- Avoid e.g., i.e., etc. in user-facing text
- Use "for example," "that is," and "and so on" instead

## Word Choices

### Priority vs. Severity
- Use "priority" for user-assigned importance levels
- Use "severity" for system-determined impact levels

### Close vs. Cancel
- Use "Close" for actions that close a view without discarding changes
- Use "Cancel" for actions that discard changes

### Use vs. Utilize
- Use "use" instead of "utilize" in most contexts

### N/A vs. Not Applicable vs. Not Available
- Use "N/A" for table cells or fields where data doesn't apply
- Be consistent in usage across the application

### Previous vs. Prior
- Use "Previous" for navigation or sequence
- Use "Prior" for emphasizing time or order precedence

### "Number of" and "# of"
- Use "Number of" in formal contexts
- Use "# of" only in space-constrained UI elements

### 1st vs. First
- Spell out ordinal numbers (First, Second, Third) rather than using numerals (1st, 2nd, 3rd)

### Reach out to vs. Contact
- Use "Contact" instead of "Reach out to"

### Overview vs. Summary
- Use "Overview" for high-level, introductory views
- Use "Summary" for condensed versions of longer content

## Accessibility Considerations

When writing text for components:

- Avoid directional language like "Click the button below"
- Write meaningful link text that describes the destination
- Ensure error messages are clear and suggest solutions
- Write descriptive button labels that indicate action
- Use clear headings that describe the content that follows

## Component-Specific Guidelines

### Buttons
- Use action verbs
- Keep text short (1-3 words)
- Be specific about the action
- Examples: "Save", "Delete", "Export Data"

### Form Labels
- Be concise but descriptive
- Use sentence case
- Don't use colons after labels
- Example: "Email address" not "Email:"

### Error Messages
- Be specific about what went
- Suggest a solution when possible
- Don't blame the user
- Example: "Password must contain at least 8 characters" not "Invalid password"
- Use a calm, reassuring tone
- Avoid alarming language or excessive punctuation
- Focus on recovery rather than the error itself

### Tooltips
- Keep brief (5-10 words ideal)
- Provide helpful, non-redundant information
- Don't restate what's already visible
- Consider if information would be better as visible text

### Placeholder Text
- Use as hints, not as labels
- Keep brief and helpful
- Don't use for required information
- Example: "e.g., Quarterly Sales Report"

### Modal Titles
- Use clear, action-oriented language
- Keep to one line if possible
- Use title case
- Example: "Confirm Deletion" not "Are you sure?"

### Empty States
- Explain why content is missing
- Suggest an action to fill the empty state
- Be encouraging, not apologetic
- Example: "No results found. Try adjusting your filters."

## Tone in Different Contexts

Adapt your tone based on the context while maintaining our core voice principles:

### Informational Content
- Objective and clear
- Straightforward language
- Focus on facts and accuracy
- Example: "This dashboard shows activity from the past 30 days."

### Guidance & Instructions
- Friendly and helpful
- Step-by-step clarity
- Encouraging without being patronizing
- Example: "Select the date range to filter your results."

### Error Messages
- Direct but not alarming
- Solution-oriented
- No blame or technical jargon
- Example: "Unable to connect to the server. Check your connection and try again."

### Success Messages
- Positive and affirming
- Brief congratulations
- Clear on what succeeded
- Example: "Report exported successfully."

### Warning/Alert Messages
- Clear and measured
- Explain the issue and impact
- Provide actionable next steps
- Example: "Your session will expire in 5 minutes. Save your work now."

## Emotional Intelligence in Writing

When writing UI text, consider the user's emotional state in different contexts:

### When Users Are Stressed (Error Situations)
- Be calm, clear, and solution-focused
- Avoid technical jargon or blame
- Provide specific next steps
- Example: "Login failed. Check your username and try again."

### When Users Are Learning (New Features)
- Be encouraging and supportive
- Break information into manageable chunks
- Emphasize value and benefits
- Example: "This filter helps you focus on high-priority alerts."

### When Users Are Busy (Everyday Tasks)
- Be concise and direct
- Prioritize essential information
- Make actions clear and obvious
- Example: "Export report" instead of "Click here to export your report to a downloadable format"

### When Users Need Reassurance (Sensitive Actions)
- Be transparent about what's happening
- Confirm their actions and intentions
- Provide clear ability to cancel or proceed
- Example: "This will delete 5 items permanently. This action cannot be undone."

## Content Structure Principles

When organizing content in components, follow these principles:

### Progressive Disclosure
- Present the most important information first
- Reveal details progressively as needed
- Use layers of information (primary, secondary, tertiary)
- Allow users to drill down for more details

### Hierarchy
- Establish clear visual and content hierarchies
- Use headings and subheadings meaningfully
- Ensure the most important content is most prominent
- Group related information together

### Consistency
- Use consistent terminology across all components
- Maintain pattern consistency for similar information
- Establish and follow naming conventions
- Reuse patterns for similar interactions

## Terminology Consistency

Maintaining consistent terminology is crucial for a coherent user experience:

### Technical Terms
- Use industry-standard terminology where it exists
- Define technical terms on first use if they're not common knowledge
- Be consistent with technical terms across the entire interface
- Avoid using different terms for the same concept

### Feature Names
- Use official feature names consistently
- Capitalize feature names appropriately
- Don't abbreviate feature names unless the abbreviation is well-established
- Be consistent with how features are referred to across the application

### Domain-Specific Language
- Use terminology familiar to the user's domain
- Avoid internal jargon that users wouldn't understand
- Be consistent with domain-specific terms
- When introducing new concepts, relate them to familiar terminology

## Writing for Internationalization

When writing content that may be translated or used by international audiences:

### Avoid Cultural References
- Don't use idioms, metaphors, or cultural references that may not translate well
- Avoid references to specific holidays, sports, or regional events
- Be mindful of different cultural conventions and sensitivities

### Consider Text Expansion
- Allow for text expansion in translations (some languages can expand 30-50%)
- Design components with text length flexibility in mind
- Use shorter text where space is limited, as translations may be longer

### Use Simple Sentence Structures
- Keep sentences short and straightforward
- Avoid complex grammatical structures
- Use present tense when possible
- Avoid ambiguous pronouns or references

### Date and Time Formats
- Use formats that are unambiguous across cultures (YYYY-MM-DD)
- Consider using month names instead of numbers to avoid confusion
- Specify time zones where relevant
- Follow ISO standards when possible

## Examples of Good Writing

### Before/After Examples

**Before:** "Please click the button below to submit your form."  
**After:** "Submit form"

**Before:** "An error has been encountered during your attempt to save the document."  
**After:** "Unable to save document. Check your connection and try again."

**Before:** "Do you want to delete this item?"  
**After:** "Delete item"

**Before:** "Utilize the search functionality to locate users."  
**After:** "Search for users"

**Before:** "The system was not able to process your request due to a server error."  
**After:** "Server error. Try again or contact support."

**Before:** "You have successfully added the item to your cart!"  
**After:** "Item added to cart"

**Before:** "This action cannot be undone! Are you sure you want to proceed?"  
**After:** "This action cannot be undone"

## Message Types

Different message types require different approaches:

### Confirmation Messages
- Clearly state what was accomplished
- Keep succinct (2-5 words ideal)
- Use past tense for completed actions
- Examples: "Settings saved", "Profile updated", "Changes applied"

### Actionable Messages
- Start with a verb
- Be specific about what action is needed
- Keep to a single action when possible
- Examples: "Verify email address", "Complete your profile", "Update payment method"

### System Status Messages
- Clearly state the current status
- Use present tense
- Be factual and objective
- Examples: "Connection restored", "Data is being processed", "Upload in progress"

### User Progress Messages
- Frame positively and encourage completion
- Be specific about the current status
- Indicate what remains to be done
- Examples: "2 of 3 steps completed", "80% complete", "One more step to finish"

## Communication Principles

Follow these principles when writing for components:

### Be Transparent
- Be honest about capabilities and limitations
- Give visibility into processes when possible
- Avoid vague or misleading statements
- Example: "This may take up to 2 minutes" rather than "This may take some time"

### Be Specific
- Avoid generic language
- Use precise, descriptive terms
- Quantify when possible
- Example: "Scan completed: 3 issues found" rather than "Scan completed: Issues found"

### Be Consistent
- Use consistent terminology across all components
- Maintain the same tone throughout the user journey
- Apply the same writing patterns for similar situations
- Example: Use the same terms for actions across different screens (don't mix "Delete" and "Remove")

### Be Respectful
- Acknowledge user expertise and agency
- Write in a way that respects the user's time
- Never patronize or talk down to users
- Example: "Select the domain to scan" rather than "Simply select the domain you want to scan"

## Do's and Don'ts

### Do
- **Be concise**: Say what's needed in as few words as possible
- **Be actionable**: Give clear next steps and guidance
- **Be informative**: Provide context and explanations where helpful
- **Be direct**: Speak plainly about what's happening or needed
- **Be consistent**: Use the same terms, patterns, and tone throughout

### Don't
- **Don't alarm**: Avoid language that creates unnecessary anxiety
- **Don't vague**: Skip meaningless phrases and get to the point
- **Don't patronize**: Respect users' intelligence and expertise
- **Don't exaggerate**: Be honest about capabilities and limitations
- **Don't overcomplicate**: Express complex ideas in simple terms

## Voice Examples in Different Contexts

### Introducing Features
✅ **Good**: "This dashboard provides visibility into all detected threats across your network."  
❌ **Avoid**: "Our amazing new dashboard will revolutionize how you see threats!"

### Error Messages
✅ **Good**: "Unable to complete scan. Check your connection and try again."  
❌ **Avoid**: "Oops! Something went wrong with your scan. The system encountered an error!"

### Warning Messages
✅ **Good**: "Your subscription expires in 14 days. Renew now to maintain access."  
❌ **Avoid**: "WARNING: SUBSCRIPTION ENDING SOON! Act immediately to avoid catastrophic loss of protection!"

### Success Messages
✅ **Good**: "Report generated successfully. View or download now."  
❌ **Avoid**: "Great job! You've successfully generated a report. Click below to view it or download it to your computer."

### Instructions
✅ **Good**: "Select the targets to scan from your asset inventory."  
❌ **Avoid**: "To select targets for scanning, you'll want to go ahead and choose from your asset inventory list to identify which ones you'd like to scan."

## Grammar Guidelines

In addition to the mechanics already covered, consider these grammar guidelines:

### Numbers
- Spell out numbers one through nine
- Use numerals for 10 and above
- Always use numerals with units, percentages, and measurements
- Example: "three options" vs. "15 options" vs. "5 MB"

### Time
- Use a 12-hour clock with AM/PM in capitals without periods
- Include spaces before AM/PM
- Example: "3:30 PM" not "3:30PM" or "3:30 pm"

### Dates
- Use the format: Month Day, Year (for US audiences)
- Spell out the month name rather than using numerals
- Example: "May 21, 2025" not "5/21/25" or "21/5/25"

### Abbreviations
- Spell out terms on first use, followed by the abbreviation in parentheses
- Use the abbreviation alone in subsequent references
- Don't use periods in abbreviations (e.g., UI not U.I.)
- Example: "User Interface (UI)" then "UI" in following instances

## Addressing Different Audiences

Adapt your writing based on the target audience while maintaining our core voice:

### Technical Users
- Can use more specialized terminology
- Can be more direct and detailed
- Focus on specifics and technical capabilities
- Example: "Configure rate limiting to prevent brute force attacks"

### Business Users
- Focus on outcomes and business impact
- Use less technical language
- Relate features to business objectives
- Example: "Set login restrictions to improve security and prevent unauthorized access"

### New Users
- Provide more guidance and explanation
- Use clear, straightforward language
- Focus on fundamental concepts
- Example: "Access controls let you decide who can view or edit your data"

### Experienced Users
- Be more concise
- Focus on efficiency
- Reference advanced features
- Example: "Use keyboard shortcuts for faster navigation"

## Writing About Security

When writing about security-related features or information:

### Be Factual and Clear
- Present security information accurately
- Avoid fear-mongering
- Be precise about threats and risks
- Example: "This vulnerability allows unauthorized access to user data" rather than "CRITICAL SECURITY RISK DETECTED!"

### Be Action-Oriented
- Focus on what can be done
- Provide clear security recommendations
- Prioritize actions by importance
- Example: "Update your password now to secure your account"

### Balance Detail and Clarity
- Provide enough detail to understand the security context
- Don't overwhelm with technical details
- Use plain language for security concepts when possible
- Example: "Encrypt your connection" rather than "Implement TLS 1.3 protocol"

### Be Responsible
- Don't disclose sensitive security details that could be exploited
- Follow responsible disclosure principles
- Focus on protection rather than attack techniques
- Example: "Update to patch a critical vulnerability" rather than "Here's how attackers could exploit your system"