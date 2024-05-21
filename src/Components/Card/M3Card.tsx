import React from "react";
import { Card, CardProps } from "@mui/material";
import { StateLayer, getStateLayerColor } from '../..';
import { theme } from "../../Theme/M3/wrapper/M3Theme";

// Define additional props and modified props for M3Card
interface M3CardModifiedProps {}

// Merge the new/ props with CardProps
export type M3CardProps = M3CardModifiedProps & CardProps;

const M3Card = (props: M3CardProps) => {
  const { palette } = theme;
  const { children, variant = "elevation" } = props;
  const [stopClickEffect, setStopClickEffect] = React.useState({});

  return (
    <Card
      {...props}
      style={{ ...stopClickEffect, ...props.style }}
      variant={props.variant || "elevation"}
    >
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          typeof child.type !== "string" &&
          (child.type as React.JSXElementConstructor<any>).name ===
            "M3CardActions"
        ) {
          return React.cloneElement(child, {
            onMouseDown: () => {
              setStopClickEffect({
                boxShadow: theme.shadows[variant === "elevation" ? 2 : 1],
                background: getStateLayerColor(
                  StateLayer.Hover,
                  palette[
                    variant === "elevation"
                      ? "surfaceContainerLow"
                      : variant === "filled"
                        ? "surfaceContainerHighest"
                        : "surface"
                  ].main,
                  palette.primary.main
                ),
              });
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
