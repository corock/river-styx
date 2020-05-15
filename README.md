# River Styx
![react-^16.8.6](https://img.shields.io/badge/react-%5E16.8.6-blue)
![prerequisites-redux](https://img.shields.io/badge/prerequisites-redux-blueviolet)  

River Styx is a simple browser game crossing the bridge app based on `create-react-app` using `redux`.

## Let's Play
```shell
git clone https://github.com/corock/river-styx.git
yarn install && yarn start
```



## 설명

Start 페이지를 누르는 순간 다음 페이지로 넘어갑니다.  
어떤 입력을 받았을 때 다음 페이지가 동작하게끔 구현합니다.

- Length: 건너가야 하는 다리(최대 개수는 알아서 설정) / 초록색 네모 부분에 해당
- Weight: 위 동물들이 얼마만큼 다리에 올라갈 수 있는지에 대한 무게

하단에 Weight: 0 -> 0

제일 중요한 건 소스 코드이며, 그다음 디자인을 확인합니다.  
무게가 넘어갈 때 멈추는 로직을 추가하거나 예외처리를 미리 하는 등의 형식은 자유입니다.
