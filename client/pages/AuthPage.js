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
    paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10,
    row: true,
    children: Frame({
      grow: 1, width: [325, 0], height: 321, marginLeft: `auto`, marginRight: `auto`, marginTop: `auto`, marginBottom: `auto`,
      children: [
        Frame({
          row: true,
          children: [
            Text({
              marginTop: `auto`, marginBottom: `auto`,
              size: 32,
              lineHeight: 48,
              weight: 600,
              letterSpacing: 0.3,
              color: [0, 123, 255, 1],
              value: signup ? `Register` : `Sign in`,
            }),
            Text({
              marginLeft: `auto`, marginTop: `auto`, marginBottom: `auto`,
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
          height: 1, marginTop: 8, marginBottom: 16,
          backgroundColor: [0, 0, 0, 0.12]
        }),
        Frame({
          marginBottom: 8,
          children: [
            Text({
              marginBottom: 12,
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Your Email`,
            }),
            Focus({
              children: isFocus => Text({
                marginBottom: 12,
                shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], borderRadius: 4,
                paddingLeft: 8, paddingRight: 8, paddingTop: 7, paddingBottom: 7,
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
          marginBottom: 8,
          row: true,
          children: [
            Frame({
              grow: 1,
              children: [
                Text({
                  marginBottom: 12,
                  size: 16,
                  lineHeight: 20,
                  weight: 600,
                  letterSpacing: 0.15,
                  color: [61, 81, 112, 1],
                  value: `Your Password`,
                }),
                Focus({
                  children: isFocus => Text({
                    marginBottom: 12,
                    shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], borderRadius: 4,
                    paddingLeft: 8, paddingRight: 8, paddingTop: 7, paddingBottom: 7,
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
              grow: 1, marginLeft: 4,
              children: [
                Text({
                  marginBottom: 12,
                  size: 16,
                  lineHeight: 20,
                  weight: 600,
                  letterSpacing: 0.15,
                  color: [61, 81, 112, 1],
                  value: `Re-type Password`,
                }),
                Focus({
                  children: isFocus => Text({
                    marginBottom: 12,
                    shadow: [[1, 0, isFocus ? [0, 123, 255, 1] : [217, 222, 229, 1]]], borderRadius: 4,
                    paddingLeft: 8, paddingRight: 8, paddingTop: 7, paddingBottom: 7,
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
          marginBottom: 20,
          children: [
            Checkbox({ marginRight: 10, marginTop: `auto`, marginBottom: `auto`, checked: agreeWithTerms, onToggle: () => agreeWithTermsSet(!agreeWithTerms) }),
            Text({
              marginRight: 10, marginTop: `auto`, marginBottom: `auto`,
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Agree with`
            }),
            Text({
              marginTop: `auto`, marginBottom: `auto`,
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
          marginBottom: 20,
          children: [
            Checkbox({ marginRight: 10, marginTop: `auto`, marginBottom: `auto`, checked: rememberMe, onToggle: () => rememberMeSet(!rememberMe) }),
            Text({
              marginRight: 10, marginTop: `auto`, marginBottom: `auto`,
              size: 16,
              lineHeight: 20,
              weight: 600,
              letterSpacing: 0.15,
              color: [61, 81, 112, 1],
              value: `Remember me`,
            }),
            Text({
              marginLeft: `auto`, marginTop: `auto`, marginBottom: `auto`,
              value: `Forgot password`
            }),
          ]
        }),
        Text({
          backgroundColor: [0, 123, 255, 1], borderRadius: 4,
          alignSelf: `flex-start`,
          paddingLeft: 32, paddingRight: 32, paddingTop: 6, paddingBottom: 6,
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