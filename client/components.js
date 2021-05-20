import { component } from "./AppState.js";

export const Frame = ({
  children,
  attrs = {},
  onClick = null,

  cursor = `inherit`,
  position = `relative`,
  flexDirection = `column`,
  flexGrow = 0,
  ...styles
}) => {
  return React.createElement(`div`, {
    style: {
      cursor: onClick === null ? cursor : `pointer`,
      boxSizing: `border-box`,
      position,
      display: `flex`,
      flexDirection,
      flexGrow,
      flexShrink: 0,
      flexBasis: flexGrow > 0 ? `0` : `auto`,
      ...styles
    },
    onClick,
    ...attrs,
  }, ...(Array.isArray(children) ? children : [children]))
};

export const Text = ({
  value = ``,
  font = `"Roboto", "Helvetica", "Arial", sans-serif`,
  fontSize = 16,
  lineHeight = fontSize * 1.2,
  fontWeight = 400,
  color = `rgba(0, 0, 0, 1)`,
  letterSpacing = 0,
  ...props
}) => {
  return Frame({
    ...props,
    children: React.createElement(`div`, {
      style: {
        overflowWrap: `break-word`,
        wordBreak: `break-all`,
        whiteSpace: `pre-wrap`,
        fontFamily: font,
        fontSize,
        lineHeight: `${lineHeight}px`,
        fontWeight,
        color,
        letterSpacing,
      },
    }, value)
  })
};

export const Input = ({
  value = ``,
  font = `"Roboto", "Helvetica", "Arial", sans-serif`,
  fontSize = 16,
  lineHeight = fontSize * 1.2,
  fontWeight = 400,
  color = `rgba(0, 0, 0, 1)`,
  letterSpacing = 0,

  onChange = null,
  type = `text`,
  ...props
}) => {
  return Frame({
    ...props,
    children: React.createElement(`input`, {
      style: {
        overflowWrap: `break-word`,
        wordBreak: `break-all`,
        whiteSpace: `pre-wrap`,
        fontFamily: font,
        fontSize,
        lineHeight: `${lineHeight}px`,
        fontWeight,
        color,
        letterSpacing,

        padding: `0px`,
        border: `none`,
        outline: `none`,
        width: `100%`,
        height: `100%`,
        background: `transparent`
      },
      value,
      onChange,
      type,
    })
  })
};

export const Checkbox = ({ size = 18, checked, onChange, ...props }) => {
  return Frame({
    ...props,
    children: React.createElement(`input`, {
      style: {
        width: size,
        height: size,
      },
      type: `checkbox`,
      checked,
      onChange,
    })
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