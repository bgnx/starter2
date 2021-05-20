import { component } from "./AppState.js";

export const Frame = ({
  float = 0,
  visual: {
    fill = [0, 0, 0, 0],
    radius = 0,
    shadow = []
  } = {},
  onClick = null,
  children,
  padding = [0, 0, 0, 0],
  paddingFill: { justifyContent = `flex-start`, alignItems = `flex-start`, alignContent = `stretch` } = {},
  overflow = `visible`,
  row = false, wrap = false,
  rect: {
    width = [null, 0],
    height = [null, 0],
    grow = 0,
    stretch = true,
    x: [offsetLeft = 0, offsetRight = float ? `auto` : 0] = [],
    y: [offsetTop = 0, offsetBottom = float ? `auto` : 0] = [],
  } = {},
  attrs,
}) => {
  const [maxWidth, minWidth] = typeof width === `number` ? [width, width] : width;
  const [maxHeight, minHeight] = typeof height === `number` ? [height, height] : height;
  return React.createElement(`div`, {
    style: {
      boxSizing: `border-box`,
      cursor: onClick === null ? `inherit` : `pointer`,
      position: float === 0 ? `relative` : `absolute`,
      zIndex: float,
      backgroundColor: `rgba(${fill[0]}, ${fill[1]}, ${fill[2]}, ${fill[3]})`,
      borderRadius: Array.isArray(radius) ? `${radius[0]}px ${radius[1]}px ${radius[2]}px ${radius[3]}px` : `${radius}px`,
      boxShadow: shadow.map(([shadowSpread = 0, shadowBlur = 0, shadowColor = [0, 0, 0, 0], shadowX = 0, shadowY = 0, shadowInner = false]) => `rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, ${shadowColor[3]}) ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowInner ? `inset` : ``}`).join(`, `),
      padding: padding.length === 2 ? `${padding[0]}px ${padding[1]}px` : `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      justifyContent,
      alignItems,
      alignContent,
      overflow,
      display: `flex`,
      flexFlow: `${row ? `row` : `column`} ${wrap ? `wrap` : `nowrap`}`,

      flex: `${grow} 0 ${grow > 0 ? `0` : `auto`}`,
      alignSelf: stretch ? `stretch` : `flex-start`,
      maxWidth: maxWidth === null ? `none` : (typeof maxWidth === `number` ? `${maxWidth}px` : maxWidth),
      maxHeight: maxHeight === null ? `none` : (typeof maxHeight === `number` ? `${maxHeight}px` : maxHeight),
      minWidth: (typeof minWidth === `number` ? `${minWidth}px` : minWidth),
      minHeight: (typeof minHeight === `number` ? `${minHeight}px` : minHeight),

      marginLeft: float ? 0 : typeof offsetLeft === `number` ? `${offsetLeft}px` : offsetLeft,
      marginRight: float ? 0 : typeof offsetRight === `number` ? `${offsetRight}px` : offsetRight,
      marginTop: float ? 0 : typeof offsetTop === `number` ? `${offsetTop}px` : offsetTop,
      marginBottom: float ? 0 : typeof offsetBottom === `number` ? `${offsetBottom}px` : offsetBottom,
      left: !float ? `auto` : typeof offsetLeft === `number` ? `${offsetLeft}px` : offsetLeft,
      right: !float ? `auto` : typeof offsetRight === `number` ? `${offsetRight}px` : offsetRight,
      top: !float ? `auto` : typeof offsetTop === `number` ? `${offsetTop}px` : offsetTop,
      bottom: !float ? `auto` : typeof offsetBottom === `number` ? `${offsetBottom}px` : offsetBottom,
    },
    onClick,
    ...attrs,
  }, ...(Array.isArray(children) ? children : [children]))
};

export const Text = ({
  value = ``,
  font = `"Roboto", "Helvetica", "Arial", sans-serif`,
  size = 16,
  lineHeight = size * 1.2,
  weight = 400,
  color = [0, 0, 0, 1],
  letterSpacing = 0,
  edit = false,
  onChange = null,
  type = `text`,
  ...props
}) => {
  return Frame({
    ...props,
    children: React.createElement(edit ? `input` : `div`, {
      style: {
        overflowWrap: `break-word`,
        wordBreak: `break-all`,
        whiteSpace: `pre-wrap`,
        fontFamily: font,
        fontSize: `${size}px`,
        lineHeight: `${lineHeight}px`,
        fontWeight: `${weight}`,
        color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
        letterSpacing: `${letterSpacing}px`,
        ///
        padding: `0px`,
        border: `none`,
        outline: `none`,
        width: `100%`,
        height: `100%`,
      },
      ...(edit ? {
        value,
        onChange,
        type,
      } : {})
    }, edit ? null : value)
  })
};

export const Vector = component(({ d, width = null, fill = [0, 0, 0, 1], stroke = [0, 0, 0, 1], strokeWidth = 0, strokeLinejoin = `miter`, strokeLinecap = `butt` }) => {
  const ref = React.useRef();
  const [size, sizeSet] = React.useState({ width: 1, height: 1, x: 0, y: 0, })
  React.useEffect(() => {
    const bBox = ref.current.getBBox();
    sizeSet({ width: bBox.width, height: bBox.height, x: bBox.x, y: bBox.y })
  }, [d]);

  const userWidth = width === null ? size.width : width;
  const userHeight = userWidth * size.height / size.width;
  const svgWidth = userWidth / (size.width / (size.width + size.x));
  const svgHeight = userHeight / (size.height / (size.height + size.y));
  const svgLeft = userWidth - svgWidth;
  const svgTop = userHeight - svgHeight;
  return React.createElement(`svg`, {
    ref,
    style: {
      position: `relative`,
      marginLeft: `${svgLeft}px`,
      marginTop: `${svgTop}px`,
      width: `${svgWidth}px`,
      height: `${svgWidth}px`,
    },
    viewBox: `0 0 ${size.width + size.x} ${size.height + size.y}`,
  }, React.createElement(`path`, {
    d,
    stroke: `rgb(${stroke[0]}, ${stroke[1]}, ${stroke[2]})`,
    strokeOpacity: `${stroke[3]}`,
    strokeWidth: `${strokeWidth}`,
    strokeLinejoin,
    strokeLinecap,
    fill: `rgb(${fill[0]}, ${fill[1]}, ${fill[2]})`,
    fillOpacity: `${fill[3]}`,
  }));
});

export const Hover = component(({ children }) => {
  const [hover, hoverSet] = React.useState(false)
  return Frame({
    attrs: {
      onMouseEnter: () => hoverSet(true),
      onMouseLeave: () => hoverSet(false)
    },
    children: children(hover)
  })
});

export const Focus = component(({ children }) => {
  const [focus, focusSet] = React.useState(false)
  return Frame({
    attrs: {
      onFocus: () => focusSet(true),
      onBlur: () => focusSet(false)
    },
    children: children(focus)
  });
});

export const Checkbox = ({ size = 18, checked, onToggle, ...props }) => {
  return Frame({
    ...props,
    children: Frame({
      rect: { width: size, height: size },
      visual: { shadow: [[2, 0, [0, 123, 255, 1], 0, 0, true]], radius: 2 },
      onClick: onToggle,
      children: [
        checked && Vector({
          fill: [0, 123, 255, 1],
          d: `M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z`
        })
      ]
    })
  })
};