import React from "react";
import { Card, CardProps } from "@mui/material";
import { StateLayer, ThemeContext, getStateLayerColor } from "../../Theme";

// Define additional props and modified props for M3Card
interface M3CardModifiedProps {}

// Merge the new/ props with CardProps
export type M3CardProps = M3CardModifiedProps & CardProps;

const M3Card = (props: M3CardProps) => {
  const { children, variant = "elevation" } = props;
  const { themeObj: theme } = React.useContext(ThemeContext);

  // State for storage the stop clicking effect style for the card
  const [stopClickEffect, setStopClickEffect] = React.useState({});

  // States for storage the changable styles for the card
  const [boxShadowStyle, setBoxShadowStyle] = React.useState({});
  const [backgroundStyle, setBackgroundStyle] = React.useState({});

  // Change the style whatever the variant or palette changes
  React.useEffect(() => {
    setBoxShadowStyle({
      boxShadow: theme?.shadows[variant === "elevation" ? 2 : 1],
    });
    theme &&
      setBackgroundStyle({
        background: getStateLayerColor(
          StateLayer.Hover,
          theme?.palette[
            variant === "elevation"
              ? "surfaceContainerLow"
              : variant === "filled"
              ? "surfaceContainerHighest"
              : "surface"
          ].main,
          theme?.palette.primary.main
        ),
      });
  }, [variant, theme]);

  return (
    <Card
      {...props}
      style={{ ...stopClickEffect, ...props.style }}
      variant={props.variant || "elevation"}
    >
      {/* Loop on children for pick the M3CardActions component which is the component from which the propagation will be stopped */}
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          typeof child.type !== "string" &&
          (child.type as React.JSXElementConstructor<any>).name ===
            "M3CardActions"
        ) {
          return React.cloneElement(child, {
            onMouseDown: () => {
              setStopClickEffect({ ...boxShadowStyle, ...backgroundStyle });
            },
            onMouseUp: () => {
              setStopClickEffect({});
            },
          } as React.Attributes & {
            onMouseDown?: React.MouseEventHandler<any>;
            onMouseUp?: React.MouseEventHandler<any>;
          });
        }
        return child;
      })}
    </Card>
  );
};

export default M3Card;
