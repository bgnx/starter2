import { Frame, Text, Focus, Checkbox } from "../components.js";
import { component, eventHandler, AppState } from "../AppState.js";

export const AuthPage = component(() => {
  const [email, emailSet] = React.useState(``);
  const [password, passwordSet] = React.useState(``);
  const [rememberMe, rememberMeSet] = React.useState(false);
  const [agreeWithTerms, agreeWithTermsSet] = React.useState(false);
  const [signup, signupSet] = React.useState(false);
  const onSubmit = eventHandler(() => {
    console.log(`submit`);
    AppState.route = `/dashboard`
  });
  return Frame({
    grow: 1,
    padding: [10, 10],
    row: true,
    children: Frame({
      grow: 1, width: [325, 0], height: 321, x: [`auto`, `auto`], y: [`auto`, `auto`],
      children: [
        Frame({
          row: true,
          children: [
            Text({
              y: [`auto`, `auto`],
              size: 32,
              lineHeight: 48,
              weight: 600,
              letterSpacing: 0.3,
              color: [0, 123, 255, 1],
              value: signup ? `Register` : `Sign in`,
            }),
            Text({
              x: [`auto`], y: [`auto`, `auto`],
              size: 16,
              lineHeight: 24,
              weight: 400,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: signup ? `Create account` : `Already have account`,
              onClick: () => signupSet(!signup)
            }),
          ]
        }),
        Frame({
          height: 1, y: [8, 16],
          fill: [0, 0, 0, 0.12]
        }),
        Frame({
          y: [0, 8],
          children: [
            Text({
              y: [0, 12],
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Your Email`,
            }),
            Focus({
              children: isFocus => Text({
                y: [0, 12],
                shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], radius: 4,
                padding: [7, 7, 8, 8],
                size: 16,
                lineHeight: 19,
                weight: 400,
                letterSpacing: 0.15,
                color: [61, 81, 112, 1],
                edit: true,
                value: email,
                type: `email`,
                onChange: (e) => emailSet(e.target.value)
              }),
            }),
          ]
        }),
        Frame({
          y: [0, 8],
          row: true,
          children: [
            Frame({
              grow: 1, x: [4],
              children: [
                Text({
                  y: [0, 12],
                  size: 16,
                  lineHeight: 20,
                  weight: 600,
                  letterSpacing: 0.15,
                  color: [61, 81, 112, 1],
                  value: `Your Password`,
                }),
                Focus({
                  children: isFocus => Text({
                    y: [0, 12],
                    shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], radius: 4,
                    padding: [7, 7, 8, 8],
                    size: 16,
                    lineHeight: 19,
                    weight: 400,
                    letterSpacing: 0.15,
                    color: [61, 81, 112, 1],
                    edit: true,
                    value: password,
                    type: `password`,
                    onChange: (e) => passwordSet(e.target.value)
                  }),
                }),
              ]
            }),
            signup && Frame({
              grow: 1, x: [4],
              children: [
                Text({
                  y: [0, 12],
                  size: 16,
                  lineHeight: 20,
                  weight: 600,
                  letterSpacing: 0.15,
                  color: [61, 81, 112, 1],
                  value: `Re-type Password`,
                }),
                Focus({
                  children: isFocus => Text({
                    y: [0, 12],
                    shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], radius: 4,
                    padding: [7, 7, 8, 8],
                    size: 16,
                    lineHeight: 19,
                    weight: 400,
                    letterSpacing: 0.15,
                    color: [61, 81, 112, 1],
                    edit: true,
                    value: password,
                    type: `password`,
                    onChange: (e) => passwordSet(e.target.value)
                  }),
                }),
              ]
            })
          ]
        }),
        signup ? Frame({
          row: true,
          y: [0, 20],
          children: [
            Checkbox({ x: [0, 10], y: [`auto`, `auto`], checked: agreeWithTerms, onToggle: () => agreeWithTermsSet(!agreeWithTerms) }),
            Text({
              x: [0, 10], y: [`auto`, `auto`],
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Agree with`
            }),
            Text({
              y: [`auto`, `auto`],
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [0, 123, 255, 1],
              value: `Terms & Condition`
            }),
          ]
        }) : Frame({
          row: true,
          y: [0, 20],
          children: [
            Checkbox({ x: [0, 10], y: [`auto`, `auto`], checked: rememberMe, onToggle: () => rememberMeSet(!rememberMe) }),
            Text({
              x: [0, 10], y: [`auto`, `auto`],
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Remember me`,
            }),
            Text({
              x: [`auto`], y: [`auto`, `auto`],
              value: `Forgot password`
            }),
          ]
        }),
        Text({
          fill: [0, 123, 255, 1], radius: 4,
          stretch: false,
          padding: [6, 32],
          value: signup ? `Register` : `Login`,
          size: 14,
          lineHeight: 24.5,
          weight: 500,
          color: [255, 255, 255, 1],
          letterSpacing: 0.4,
          onClick: () => onSubmit()
        }),
      ]
    })
  })
});