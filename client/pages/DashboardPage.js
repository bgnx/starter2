import { Frame, Text, Hover, Vector } from "../components.js";
import { AppState, eventHandler } from "../AppState.js";

export const DashboardPage = () => {
  return Frame({
    width: AppState.windowWidth, height: AppState.windowHeight,
    backgroundColor: `rgba(245, 246, 248, 1)`,
    flexDirection: `row`,
    children: [,
      Frame({
        width: 200,
      }),
      Frame({
        flexGrow: 1,
        children: [
          Frame({
            flexGrow: 1,
            paddingLeft: 32, paddingRight: 32, paddingTop: 88, paddingBottom: 32,
            overflow: `scroll`,
            children: [
              Frame({
                marginBottom: 40,
                children: [
                  Text({
                    marginBottom: 32,
                    value: `Мой счёт`,
                    size: 20,
                    lineHeight: 23,
                    weight: 500,
                    color: [61, 81, 112, 1]
                  }),
                  Text({
                    marginBottom: 24,
                    value: `$4 352`,
                    size: 72,
                    lineHeight: 84,
                    weight: 400,
                    color: [61, 81, 112, 1]
                  }),
                  Text({
                    backgroundColor: `rgba(0, 123, 255, 1)`, borderRadius: 4,
                    alignSelf: `flex-start`,
                    paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6,
                    value: `Вывод средств`,
                    size: 14,
                    lineHeight: 24.5,
                    weight: 500,
                    color: [255, 255, 255, 1],
                    letterSpacing: 0.4
                  }),
                ]
              }),
              Frame({
                marginBottom: 40,
                children: [
                  Text({
                    marginBottom: 32,
                    value: `Инвентарь`,
                    size: 20,
                    lineHeight: 23,
                    weight: 500,
                    color: [61, 81, 112, 1],
                  }),
                  Frame({
                    marginLeft: -12, marginRight: -12, marginTop: -12, marginBottom: -12,
                    flexDirection: `row`,
                    flexWrap: `wrap`,
                    children: [
                      Card(),
                      Card(),
                      Card(),
                    ]
                  })
                ]
              })
            ]
          }),
          Frame({
            position: `absolute`,
            height: 56, left: 0, right: 0,
            backgroundColor: `rgba(255, 255, 255, 1)`,
          }),
        ]
      }),
      Frame({
        position: `absolute`,
        width: 200, top: 0, bottom: 0,
        backgroundColor: `rgba(255, 255, 255, 1)`, boxShadow: `0px 1px 2px 0px rgba(225, 229, 235, 0.8), 0px 13px 27px 0px rgba(90, 97, 105, 0.15)`,
        children: [
          Frame({ height: 56 }),
          Frame({ height: 1, backgroundColor: `rgba(0, 0, 0, 0.12)` }),
          MenuItem({ route: `/dashboard`, label: `Главная страница`, Icon: fill => Vector({ fill, width: 20, d: `M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z` }) }),
          MenuItem({ route: `/dashboard/exchange`, label: `Биржа товаров`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M5.2496 8.0688l2.83-2.8268 14.134 14.15-2.83 2.8268zM9.4857 3.8272l2.828-2.8288 5.6576 5.656-2.828 2.8288zM.9989 12.3147l2.8284-2.8284L9.484 15.143l-2.8284 2.8284zM1 21h12v2H1z` }) }),
          MenuItem({ route: `/dashboard/inventory`, label: `Инвентарь`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z` }) }),
          MenuItem({ route: `/dashboard/orders`, label: `Мои заказы`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z` }) }),
          MenuItem({ route: `/dashboard/warehouse`, label: `Мой склад`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z` }) }),
          MenuItem({ route: `/dashboard/batches`, label: `Мои отправления`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6h-4c0 1.62-1.38 3-3 3s-3-1.38-3-3H5V5h14v4zm-4 7h6v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3z` }) }),
          MenuItem({ route: `/dashboard/user`, label: `Пользователи`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z` }) }),
          MenuItem({ route: `/dashboard/settings`, label: `Настройки`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z` }) }),
          MenuItem({ route: `/dashboard/messages`, label: `Сообщения`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z` }) }),
          MenuItem({ route: `/dashboard/finances`, label: `Финансы`, Icon: fill => Vector({ fill, width: 20, width: 20, d: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z` }) }),
        ]
      })
    ]
  })
};

const MenuItem = ({ route = ``, label = ``, Icon = (fill) => null }) => {
  const active = AppState.route === route;
  return Hover({
    children: (isHover) => Frame({
      height: 50,
      backgroundColor: isHover ? `rgba(0, 0, 0, 0.08)` : `rgba(0, 0, 0, 0)`,
      flexDirection: `row`,
      onClick: eventHandler(() => { AppState.route = route }),
      children: [
        Frame({ width: 5, backgroundColor: active ? `rgba(0, 123, 255, 1)` : `rgba(0, 0, 0, 0)` }),
        Frame({
          marginLeft: 13, marginTop: `auto`, marginBottom: `auto`,
          children: Icon(active ? [0, 123, 255, 1] : [189, 194, 209, 1])
        }),
        Text({
          marginLeft: 18, marginTop: `auto`, marginBottom: `auto`,
          value: label,
          size: 13,
          lineHeight: 15,
          weight: 500,
          color: [61, 81, 112, 1]
        })
      ]
    })
  })
};

const Card = () => {
  return Frame({
    flexGrow: 1, height: 148, maxWidth: 402, minWidth: `max-content`,
    paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12,
    children: Frame({
      backgroundColor: `rgba(255, 255, 255, 1)`, borderRadius: 4, boxShadow: `0px 5px 19px 0px rgba(90, 97, 105, 0.12)`,
      paddingLeft: 24, paddingRight: 24, paddingTop: 24, paddingBottom: 24,
      flexDirection: `row`,
      children: [
        Frame({
          width: 88, height: 88, marginRight: 16,
          boxShadow: `inset 0px 0px 0px 3px rgba(32, 168, 216, 1)`, borderRadius: 44,
          children: [
            Text({
              marginLeft: `auto`, marginRight: `auto`, marginTop: `auto`, marginBottom: `auto`,
              value: `7`,
              size: 40,
              lineHeight: 47,
              weight: 700,
              color: [61, 81, 112, 1]
            }),
          ]
        }),
        Text({
          marginTop: `auto`, marginBottom: `auto`,
          value: `Товаров в инвентаре`,
          size: 16,
          lineHeight: 19,
          weight: 500,
          color: [61, 81, 112, 1]
        })
      ]
    })
  });
};