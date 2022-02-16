Eryngi CSS - A custom minimalist CSS library using SASS.

A minimal CSS library to use when all you need is a simple and clean and responsive layout.

Existing components can be modified by editing the /sass/index.scss file and compiling

Recommended SASS compiler: Gulp wis SASS-plugin.

```
npm install gulp gulp-sass sass --save-dev
```

DEMO:  
https://erynder-z.github.io/eryngi-css/

Library features:

// theme colors
primary
secondary
error
info

// color palette
colors: (
'primary
'secondary
'error'
'info'
'blue'
'red'
'yellow'
'green'
'orange'
'purple'
'gray'
'black'
'white'
)

// 5-level spacing
padding
margin
usage: eg: mt-4 | margin-top-4 == base-margin\*4

// borders
border-thickness
border-radius
usage: eg: br-xs

// font-sizes
font-size
font-size-sm
font-size-lg
font-size-xl
font-size-xxl

Library components:

- Navbar (navbar)
- Card (card)
- Button (btn)
- Badge (badge)

The following code creates a Navbar with the primary background color, white text and a bottom margin (level-4):

```
   <nav class="navbar-primary text-white mb-4">
      ...
    </nav>
```
