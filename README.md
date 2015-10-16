## ANNOUNCEMENTS

  Should be fully compatible with the new Gcal UI.
  
  Note: The default sidebar width has changed from 180 ot 145. You'll have to change that in your settings if you want it to appear correctly.


## WHAT DOES IT DO?

  It is a personalized solution for those who are tired of useless and distracting elements in the Google Calendar interface.
  It removes as much or as little as you want. It also adds functionality if you so choose.
  Look around the options page to see what it does first hand. Link below.


## PERMISSIONS

  Learn more about Chrome Extension permissions here: http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=186213
  If you look as the permissions required by similar extensions in the Web Store, you will see that they are exactly the same
  so before you make assumptions based on two short and broad statements, please read the following:

**"tabs"**
  * This permissions results in the "This extensions can access your browsing history" warning.
  * I *NEVER* access your browsing history.
  * I need this permission to open tabs. I use this to open the options page on major updates.
  * This permission is also used to refresh the Google Calendar tab when you save your settings.

**"http://\*google.com/calendar/\*", "https://\*google.com/calendar/\*"**
  * This permission results in the "This extension can access your data on ..." warning.
  * I *NEVER* access, read, store, or transmit your personal data.
  * I need this permission to run user scripts behind specific pages in the browser.
  * These scripts inject Javascript and CSS into Gmail to enhance functionality and hide elements

  Still don't trust me? See the entire source code for yourself.


## OPTIONS

  The Options page is easy to use and has interactive features:
  * Screenshots when you mouseover options so you know what you're changing
  * Organized tabbed navigation




The following elements can be modified individually:

#### GENERAL
  * Hide Minimalist for Google Calendar options icon
  * Show date in favicon
  * Show transition animations
  * Rounded corners on input fields and textareas
  * Custom CSS input

#### THEME
  * Customize background color
  * Customize border color
  * Customize link color
  * Customize hours style
  * Customize today highlight color
  * Customize button colors

#### GOOGLE BAR
  * Hide Google bar [click to toggle when hidden]
  * Make Google bar invisible until hover
  * Hide background & border
  * Hide Google links
  * Replace Google links with custom menu
  * Hide logged in
  * Hide Labs icon
  * Hide Settings link
  * Hide Help link
  * Hide Sign out link

#### HEADER
  * Hide header [click to toggle when hidden]
  * Hide logo
  * Use custom logo
  * Hide all search
  * Hide search button
  * Hide search options

#### MAIN
  * Hide top toolbar
  * Hide "Today" button
  * Hide navigation arrows
  * Hide current date range
  * Hide print button
  * Hide Refresh link
  * Hide view buttons

#### NAVIGATION
  * Hide navigation
  * Custom nav width
  * Hide Create event button
  * Hide Quick add link
  * Hide mini calendar
  * Hide My calendars
  * Hide Other calendars
  * Hide "Add a friend's calendar"
  * Hide "Add | Settings" links

## MORE?
 Leave feature suggestions in the [Issue Tracker](https://github.com/ldash/Minimalist-Google-Calendar/issues)


## ISSUES TRACKING
  I test as thoroughly as I can before each release, but bugs are bound to get through.
  Read, track, and submit bugs in the [Issue Tracker](https://github.com/ldash/Minimalist-Google-Calendar/issues)


## QUESTION?
 Email me: ldashevskiy@gmail.com


## COMING SOON
  Want to recommend a feature? Submit it in the [Issue Tracker](https://github.com/ldash/Minimalist-Google-Calendar/issues)


## CHANGELOG


#### 0.7.7 [October 15, 2015]
* The development standards (specifically the security policy of Chrome's extensions) have progressed a great deal since last update, so an entire overhaul of the extension had to be performed for it to simply load with no errors, the extension got basically modernized, all of the old API calls were upgraded and the fix was added to address the left panel not hiding properly.
* The domains to activate the extension on were updated to reflect the change by Google.
 
#### 0.7.00 [30]
 * Added: Full support for new UI! (theme settings work but most are no necessary)
 * Changed: Buttons no longer skinned by default

#### 0.6.14 [18 MAY]
 * Fixed: Unreliability in 13.*

#### 0.6.13 [17 MAY]
 * Fixed: Typo in background.html

#### 0.6.12 [17 MAY]
 * Fixed: Typo on options page
 * Fixed: Workaround for Chromium 82784: http://goo.gl/XZMSr. No icon for affected builds

#### 0.6.11 [12 APR]
 * Fixed: Custom settings fields not loading from memory
 * Fixed: Export loop not catching background or link colors
 * Fixed: Custom Google Links not applying to new Google Bar

#### 0.6.10 [27 MAR]
 * Fixed: color-coded links in agenda view over-riden by custom link color
 * Fixed: Agenda view header not affected by custom accent color

#### 0.6.9 [21 MAR]
 * Fixed: typo

#### 0.6.8 [20 MAR]
 * Changed: URL bar icons are smaller and lighter to not be intrusive

#### 0.6.7 [18 MAR]
 * Changed: Logos to comply with Google's branding guidelines

#### 0.6.6 [17 MAR]
 * Fixed: Hide My calendar, other calendars and add calendars box not working

#### 0.6.5 [16 MAR]
 * Added: Minimalist for Google Reader info
 * Fixed: input and textarea borders now match border colors
 * Fixed: bars remain when hiding Google user bar elements
 * Fixed: Google Bar features incompatible with new Google Bar

#### 0.6.4 [20 Feb]
 * Added: Donate tab in options
 * Fixed: Install failure on Chrome for Fedora
 * Fixed: New Google Bar not compatible. [not rolling out yet, preemptive fix]
 * Fixed: Dim weekend overrides today highlighting in month view

#### 0.6.3 [10 Feb]
 * Fixed: Header contents hidden when Google Bar hidden

#### 0.6.2 [10 Feb]
 * Added: Week starts on Monday option for dim weekends
 * Fixed: [partially] unclickable top nav with header hidden [for real this time]

#### 0.6.1 [10 Feb]
 * Added: Show current date in favicon
 * Added: Custom background color
 * Added: Custom link color
 * Added: Dim weekends
 * Fixed: 2nd custom link always disabled "Calendar"
 * Fixed: unclickable top nav with header hidden

#### 0.6.0
 * First!


## LEGAL

  I am not a Google Employee or officially affiliated with Google in any way. This extension is not endorsed by Google.
  Google, Google Calendar, and the Google Calendar logo are trademarks of Google Inc.
  Use of these trademarks is subject to Google Permissions.
