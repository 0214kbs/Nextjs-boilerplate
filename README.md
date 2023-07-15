# Front boilerplate

## 사용 기술 스택

| Next.js(v13.4.8) | React(v18.2.0) | TypeScript(v5.1.6) | Node(v16.20.1) |
| :--------------: | :------------: | :----------------: | :------------: |
|    ![nextjs]     |    ![react]    |        ![ts]       |     ![node]    |

| storybook(v7.0.26) | styled-component(v6.0.2) | zustand(v4.3.9) |
| :----------------: | :----------------------: | :-------------: |
|      ![sb]         |           ![sc]          |                 |

## 개발 환경

|  Eslint(v8.2.0)   | Prettier(v3.0.0) |
| :---------------: | :--------------: |
|     ![eslint]     |    ![prettier]   |


## 폴더 구조
```
│   .eslintrc.json 
│   .gitignore
│   .prettierrc
│   next-env.d.ts
│   next.config.js
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
├───.storybook                          # Storybook 설정
│       main.ts
│       preview.ts
├───public                              # 정적 파일들
│       cow.jpg
└───src
    ├───apis                            # API 호출과 관련된 코드들
    │       api.ts         
    ├───app                             # 앱 관련 디렉터리 
    │   │   layout.tsx
    │   │   page.tsx
    │   ├───lib
    │   │       registry.tsx
    │   └───login                       # 로그인 페이지
    │           page.tsx                    # 로그인 페이지 정의 : 아래 로그인 페이지 컴포넌트만 호출 
    ├───components                      # 재사용 가능한 컴포넌트들
    │   ├───button                      # Button 컴포넌트
    │   │       Button.stories.ts           # storybook docs
    │   │       Button.styled.tsx           # styled-component 적용한 버튼 
    │   │       Button.type.ts              # 버튼 컴포넌트에 사용할 type 정의
    │   │       index.tsx                   # 버튼 컴포넌트 정의
    │   ├───common
    │   │   └───navbar                  # Navbar 컴포넌트
    │   │           index.tsx               # Navbar 컴포넌트 정의 : <Link> 사용 참고 
    │   │           Navbar.styled.tsx       # styled-component 적용
    │   └───input
    ├───hooks                           # React Custom Hooks
    │       useInputHook.tsx                # 입력 컴포넌트에 사용되는 custom hook 정의 
    ├───pageComponents                  # 페이지 컴포넌트들 : 여러 컴포넌트들을 조합하여 만든 페이지 컴포넌트
    │   └───login                           # 로그인 페이지 컴포넌트
    │           index.tsx                       # 로그인 페이지 컴포넌트 정의
    │           Login.layout.tsx                # style-component 적용한 페이지 레이아웃 
    ├───stores                          # zustand 상태 관리 코드들
    │       useLoginStore.ts                # 로그인 상태관리 코드
    └───styles                          # 전역 CSS, Theme 
            DefaultTheme.ts                 # 기본 테마 설정
            globals.CSS                     # 공통 적용 css
```


## Getting Started

### 실행 방법

```bash
npm run dev
```

### 스토리북 실행 방법

```bash
npm run storybook
```

[nextjs]: /images/stack/nextjs.svg
[ts]: /images/stack/typescript.svg
[react]: /images/stack/react.svg
[node]: /images/stack/node.svg
[eslint]: /images/stack/eslint.svg
[prettier]: /images/stack/prettier-color.svg
[sb]: /images/stack/storybook-color.svg
[sc]: /images/stack/styledcomponents-color.svg