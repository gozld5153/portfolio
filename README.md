# portfolio

### 22.02.26 스크롤 스냅기능 보류

### 22.02.24 스크롤 스냅기능, nav 추가

### 22.02.13 파일구성 변경

### 22.02.10 번역기능 추가

### 22.02.08 포트폴리오 start

### bug

- 모바일 환경에서 scroll-snap-type css가 정상 작동하지 않는다.
- <strike>snap 기능이 정상작동 하지 않는다.</strike> &nbsp; 부모태그가 아닌 html에 scroll-snap-type 적용으로 해결
- 첫 렌더링시 FOUT현상 발생 웹폰트가 미적용된 기본폰트를 보여주고 reflow 현상이 일어난다. webfontloader를 사용해서 최대한 빠르게 로딩할 수 있도록 하고, font-display 속성을 block으로 변경했다.
