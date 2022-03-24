# 시퀀스 다이어그램

### 1. 주변 의료 정보 조회

1-1. 주변 전체 의료 기관 정보 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB
		participant K as KAKAOMAP API

		U->>F: 의료기관 정보 조회 페이지 요청
		F-->>U: 의료기관 정보 조회 페이지 반환
		U->>F: 주변 전체 의료기관 정보 조회
		F->>B: 의료 기관 정보 목록 요청
		B->>D: 의료 기관 정보 목록 조회
		D-->>B: 의료 기관 정보 목록 반환
		B->>+F: 의료 기관 정보 목록 반환
		F->>F: 현재 위치를 기준으로 의료 기관 정보 정렬
		F->>K: 카카오맵 지도 요청
		K-->>F: 카카오맵 지도 반환
		F->>F: 의료 기관 정보 지도에 매핑
		F-->>U: 의료 기관 정보 반환
```

1-2. 옵션 별 의료 기관 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB
		participant K as KAKAOMAP API

		U->>F: 옵션 선택 후 의료기관 조회
		F->>B: 옵션 별 의료 기관 정보 목록 요청
		B->>D: 옵션 별 의료 기관 정보 목록 조회
		D-->>B: 옵션 별 의료 기관 정보 목록 반환
		B->>+F: 옵션 별 의료 기관 정보 목록 반환
		F->>F: 현재 위치를 기준으로 의료 기관 정보 정렬
		F->>K: 카카오맵 지도 요청
		K-->>F: 카카오맵 지도 반환
		F->>F: 의료 기관 정보 지도에 매핑
		F->>U: 옵션 별 의료 기관 정보 반환
```

1-3. 현재 위치 기반 의료기관 조회

```mermaid
sequenceDiagram
	actor U as USER
	participant F as FE
	participant B as BE
	participant D as DB
	participant K as KAKAOMAP API
	participant J as ADDRESS API

	U->>J: 도로명 주소 입력
	J-->>U: 도로명 주소 반환
	U->>F: 도로명 주소 기반 주변 의료 기관 조회
	F->>B: 의료 기관 정보 목록 요청
	B->>D: 의료 기관 정보 목록 조회
	D-->>B: 의료 기관 정보 목록 반환
	B->>+F: 의료 기관 정보 목록 반환
	F->>F: 사용자 입력 주소 기준으로 의료 기관 정보 정렬
	F->>K: 카카오맵 지도 요청
	K-->>F: 카카오맵 지도 반환
	F->>F: 의료 기관 정보 지도에 매핑
	F-->>U: 의료 기관 정보 반환
```

1-4. 의료기관 상세 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 의료기관 상세 보기 버튼 클릭
		F->>B: 의료 기관 상세 정보 요청
		B->>D: 의료 기관 상세 정보 조회
		D-->>B: 의료 기관 상세 정보 반환
		B->>F: 의료 기관 상세 정보 반환
		F-->>U: 의료 기관 정보 반환
```

### 2. 코로나 정보 조회

2-1. 코로나 선별 진료소 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB
		participant K as KAKAOMAP API

		U->>F: 코로나 선별 진료소 조회 페이지 요청
		F->>U: 코로나 선별 진료소 조회 페이지 반환
		F->>B: 코로나 선별 진료소 정보 목록 요청
		B->>D: 코로나 선별 진료소 목록 조회
		D-->>B: 코로나 선별 진료소 목록 반환
		B->>F: 코로나 선별 진료소 목록 반환
		F->>K: 카카오맵 지도 요청
		K-->>F: 카카오맵 지도 반환
		F-->>U: 코로나 선별 진료소 정보 목록 반환
```

2-2. 코로나 확진자 정보 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 코로나 관련 정보 조회 페이지 요청
		F->>U: 코로나 관련 정보 조회 페이지 반환
		U->>F: 코로나 확진자 조회 옵션 선택
		F->>B: 옵션에 따른 코로나 확진자 정보 요청
		B->>D: 코로나 확진자 정보 테이블 조회
		D-->>B: 코로나 확진자 정보 반환
		B->>F: 코로나 확진자 정보 반환
		F->>U: 코로나 확진자 정보 반환
```

2-3. 코로나 방역 수칙 정보 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 코로나 관련 정보 조회 페이지 요청
		F->>U: 코로나 관련 정보 조회 페이지 반환
		U->>F: 코로나 방역 수칙 조회 옵션 선택
		F->>B: 옵션에 따른 코로나 방역 수칙 정보 요청
		B->>D: 코로나 방역 수칙 정보 테이블 조회
		D-->>B: 코로나 방역 수칙 정보 반환
		B->>F: 코로나 방역 수칙 정보 반환
		F->>U: 코로나 방역 수칙 정보 반환
```

2-4. 코로나 주변 병의원 정보 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB
		participant K as KAKAOMAP API

		U->>F: 코로나 상담 병의원 조회 페이지 요청
		F->>U: 코로나 상담 병의원 조회 페이지 반환
		U->>F: 주변 전체 병의원 정보 조회
		F->>B: 병의원 정보 목록 요청
		B->>D: 병의원 정보 목록 조회
		D-->>B: 병의원 정보 목록 반환
		B->>F: 병의원 정보 목록 반환
		F->>F: 현재 위치를 기준으로 병의원 정보 정렬
		F->>K: 카카오맵 지도 요청
		K-->>F: 카카오맵 지도 반환
		F->>F: 병의원 정보 지도에 매핑
		F-->>U: 병의원 정보 목록 반환
```

### 3. 증상에 따른 질병 정보 조회

```mermaid
sequenceDiagram
		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 증상·질병 검색 페이지 요청
		F-->>U: 증상·질병 검색 페이지 반환
		F->>B: 질병 목록 조회
		B->>D: 질병 목록 조회
		D-->>B: 질병 목록 반환
		B-->>F: 질병 목록 반환
		F-->>+U: 질병 목록 반환

		U->>-F: 증상 정보 입력
		F->>B: 증상 정보에 따른 질병 목록 조회 요청
		B->>D: 증상·질병 테이블에서 증상 정보 목록 조회
		D-->>B: 요청 증상에 대한 정보 목록 반환
		B-->>F:증상 정보에 따른 질병 목록 반환
		F-->>+U: 증상에 따른 질병 목록 반환

		U->>-F: 질병 상세보기 버튼 클릭
		F->>B: 해당 질병 정보 조회
		B-->>D: 해당 질병 정보 조회
		D-->>B: 해당 질병 정보 반환
		B-->>F: 해당 질병 정보 반환
		F-->>U: 해당 질병 상세 보기 페이지로 이동

```

### 4. 의약품 정보 조회

```mermaid
sequenceDiagram

		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 의약품 정보 조회 페이지 요청
		F->>U: 의약품 정보 조회 페이지 반환
		U->>F: 의약품 정보 입력 및 검색
		F->>B: 의약품 정보 목록 요청
		B->>D: 의약품 정보 테이블 조회
		D-->>B: 의약품 목록 반환
		B->>F: 의약품 목록 반환
		F->>U: 검색 정보에 해당하는 의약품 목록 표시

		U->>F: 의약품 사진 업로드
		F->>B: 의약품 사진 전송
    B->>B: 사진 분석 및 정보 추출
		B->>D: 의약품 정보 테이블 조회
		D-->>B: 의약품 목록 반환
		B->>F: 의약품 목록 반환
		F->>U: 의약품 사진과 유사한 의약품 목록 표시

		U->>F: 상비약 정보 조회 페이지 요청
		F->>U: 상비약 정보 조회 페이지 반환
		U->>F: 상비약이 필요한 원하는 상황 체크
		F->>B: 상비약 정보 요청
		B->>D: 상비약 정보 테이블 조회
		D-->>B: 일치하는 상비약 목록 반환
		B->>F: 상비약 목록 반환
		F->>U: 원하는 상황에 해당하는 상비약 목록 표시
```

### 5. 보험 청구 여부 / 진료비 예상 금액 조회

```mermaid
sequenceDiagram

		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 보험 적용 여부 검색 페이지 요청
		F->>U: 보험 적용 여부 검색 페이지 반환
		U->>F: 의료 행위 검색
		F->>B: 보험 적용 여부 요청
		B->>D: 의료 행위 별 보험 적용 여부 테이블 조회
		D-->>B: 보험 적용 여부 반환
		B->>F: 보험 적용 여부 반환
		F->>U: 보험 적용 여부 표시
```

```mermaid
sequenceDiagram

		actor U as USER
		participant F as FE
		participant B as BE
		participant D as DB

		U->>F: 예상 진료비 조회 페이지 요청
		F->>U: 예상 진료비 조회 페이지 반환
		U->>F: 질병 및 의료 행위 리스트 작성
		F->>B: 예상 진료비 요청
		B->>D: 진료비 테이블 조회
		D-->>B: 예상 진료비 계산 및 반환
		B->>F: 예상 진료비 반환
		F->>U: 예상 진료비 표시
```
