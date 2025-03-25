import { how_photo_lst, other_photo_lst } from "./imglist";

//상품 상세 테이블 리스트
export const details_lst = [
  { id: 1, title: "제품 소재", content: ["폴리에스터"] },
  { id: 2, title: "치수", content: ["150*200cm"] },
  { id: 3, title: "제조자(수입자)", content: ["폴리에스터"] },
  {
    id: 4,
    title: "세탁방법 및 취급시 주의사항",
    content: [
      "1. 이염의 원인이 되므로 단독 세탁하세요. 2. 30ºC 이하의 찬물에서 중성세제를 사용하여 손세탁해 주세요. (세탁기 사용시 제품의 변형이 생길 수 있습니다.) 3. 울 코스의 세탁기 사용이 가능합니다. 4. 드럼세탁기 사용 시 열건조는 피해주세요. 5. 염소계 표백제는 사용하지 마세요. 6. 세탁 후 바닥에 뉘어서 그늘에서 말리세요.",
    ],
  },
  { id: 5, title: "색상", content: ["차콜+그레이"] },
  { id: 6, title: "제품구성", content: ["차렵이불 슈퍼싱글 1개"] },
  {
    id: 7,
    title: "제조국",
    content: ["중국"],
  },
  {
    id: 8,
    title: "품질보증기준",
    content: [
      "제품 이상 시 공정거래위원회 고시 소비자분쟁해결기준에 의거 보상합니다.",
    ],
  },
  {
    id: 9,
    title: "A/S 책임자와 전화번호",
    content: ["쿠팡고객센터 1577-7011"],
  },
];

//qusetion list
export const questionlist = [
  {
    id: 1,
    color: "핑크+그레이",
    size: "슈퍼싱글",
    content: "원산지 알려주세요",
    date: "2025/03/20 23:42:11",
  },
  {
    id: 2,
    color: "핑크+그레이",
    size: "슈퍼싱글",
    content: "봄에 덮어도 되나요 여름이불처럼 넘얇은거아신가요",
    date: "2025/03/14 17:33:33",
  },
  {
    id: 3,
    color: "차콜+그레이",
    size: "슈퍼싱글",
    content: "슈퍼싱글이 그냥 덮는거 딱 한개고 퀸은 달라요?",
    date: "2025/02/22 19:19:37",
  },
  {
    id: 4,
    color: "차콜+그레이",
    size: "슈퍼싱글",
    content: "오코텍스 라벨정보나 등급확인요청드립니다",
    date: "2024/11/11 16:38:48",
  },

  {
    id: 5,
    color: "차콜+그레이",
    size: "슈퍼싱글",
    content: "10킬로 통돌이 세탁기에 들어갈까요?",
    date: "2024/11/02 19:26:27",
  },
];

//answer list
export const answerlist = [
  {
    id: 1,
    content:
      "안녕하세요. 코멧 홈 베이직 차렵이불, 핑크+그레이, 슈퍼싱글 상품은 중국에서 제조된 점 상세페이지 내 필수 표기정보를 통해 안내드리고 있으니 참고 부탁드립니다. 감사합니다.",
    date: "2025/03/21 09:48:04",
  },
  {
    id: 2,
    content:
      "안녕하세요. 코멧 홈 베이직 차렵이불, 핑크+그레이, 슈퍼싱글 상품은 사계절 사용 가능한 점 상세페이지 내 안내드리고 있으니 참고하여 이용 부탁드립니다. 감사합니다.",
    date: "2025/03/11 09:12:04",
  },
  {
    id: 3,
    content:
      "안녕하세요. 코멧 홈 베이직 차렵이불, 차콜+그레이, 슈퍼싱글 상품의 퀸 사이즈 구성은 차렵이불 1개인 점 참고하여 이용 부탁드립니다. 감사합니다.",
    date: "2024/11/11 16:38:48",
  },

  {
    id: 4,
    content:
      "안녕하세요. 문의하신 코멧 홈 베이직 차렵이불, 차콜+그레이, 슈퍼싱글 상품은 오코텍스 2등급인 점 참고하여 이용 부탁드립니다. 감사합니다.",
    date: "2024/11/11 16:38:48",
  },

  {
    id: 5,
    content:
      "고객님의 문의 사항은 업체(제조사) 확인 후에 답변 드릴 수 있습니다. 업체의 연결 지연 또는 운영 시간 종료 인한 연락 불가 시에는 답변에 시간이 소요될 수 있음을 양해 부탁 드립니다. 업체 확인 후 빠른 답변 드릴 수 있도록 노력하겠습니다. 감사합니다.",
    date: "2024/11/02 19:28:52",
  },
];

//quesetio + answer list
export const answerlst = [
  {
    question: {
      id: 1,
      color: "핑크+그레이",
      size: "슈퍼싱글",
      content: "원산지 알려주세요",
      date: "2025/03/20 23:42:11",
    },
    answer: {
      id: 1,
      content:
        "안녕하세요. 코멧 홈 베이직 차렵이불, 핑크+그레이, 슈퍼싱글 상품은 중국에서 제조된 점 상세페이지 내 필수 표기정보를 통해 안내드리고 있으니 참고 부탁드립니다. 감사합니다.",
      date: "2025/03/21 09:48:04",
    },
  },
  {
    question: {
      id: 2,
      color: "핑크+그레이",
      size: "슈퍼싱글",
      content: "봄에 덮어도 되나요 여름이불처럼 넘얇은거아신가요",
      date: "2025/03/14 17:33:33",
    },
    answer: {
      id: 2,
      content:
        "안녕하세요. 코멧 홈 베이직 차렵이불, 핑크+그레이, 슈퍼싱글 상품은 사계절 사용 가능한 점 상세페이지 내 안내드리고 있으니 참고하여 이용 부탁드립니다. 감사합니다.",
      date: "2025/03/11 09:12:04",
    },
  },
  {
    question: {
      id: 3,
      color: "차콜+그레이",
      size: "슈퍼싱글",
      content: "슈퍼싱글이 그냥 덮는거 딱 한개고 퀸은 달라요?",
      date: "2025/02/22 19:19:37",
    },
    answer: {
      id: 3,
      content:
        "안녕하세요. 코멧 홈 베이직 차렵이불, 차콜+그레이, 슈퍼싱글 상품의 퀸 사이즈 구성은 차렵이불 1개인 점 참고하여 이용 부탁드립니다. 감사합니다.",
      date: "2024/11/11 16:38:48",
    },
  },
  {
    question: {
      id: 4,
      color: "차콜+그레이",
      size: "슈퍼싱글",
      content: "오코텍스 라벨정보나 등급확인요청드립니다",
      date: "2024/11/11 16:38:48",
    },
    answer: {
      id: 4,
      content:
        "안녕하세요. 문의하신 코멧 홈 베이직 차렵이불, 차콜+그레이, 슈퍼싱글 상품은 오코텍스 2등급인 점 참고하여 이용 부탁드립니다. 감사합니다.",
      date: "2024/11/11 16:38:48",
    },
  },
  {
    question: {
      id: 5,
      color: "차콜+그레이",
      size: "슈퍼싱글",
      content: "10킬로 통돌이 세탁기에 들어갈까요?",
      date: "2024/11/02 19:26:27",
    },
    answer: {
      id: 5,
      content:
        "고객님의 문의 사항은 업체(제조사) 확인 후에 답변 드릴 수 있습니다. 업체의 연결 지연 또는 운영 시간 종료 인한 연락 불가 시에는 답변에 시간이 소요될 수 있음을 양해 부탁 드립니다. 업체 확인 후 빠른 답변 드릴 수 있도록 노력하겠습니다. 감사합니다.",
      date: "2024/11/02 19:28:52",
    },
  },
];

//배송정보
export const Shipping_information = [
  { id: 1, title: "배송방법", content: ["순차배송"] },
  { id: 2, title: "묶음배송 여부", content: ["가능"] },
  {
    id: 3,
    title: "배송비",
    content: [
      "무료배송",
      " - 로켓배송 상품 중 19,800원 이상 구매 시 무료배송",
      "- 도서산간 지역 추가비용 없음",
    ],
  },
  {
    id: 4,
    title: "배송기간",
    content: [
      "쿠팡친구 배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착",
      "쿠팡친구 미배송 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착",
      "도서 산간 지역 등은 하루가 더 소요될 수 있습니다. 곧 고객님께도 쿠팡친구가 찾아갈 수 있도록 노력하겠습니다",
      "천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소 지연될 수 있는 점 양해 부탁드립니다.",
    ],
  },
];

//교환/반품 안내
export const exchange = [
  {
    id: 1,
    title: "교환/반품 비용",
    content: [
      "와우멤버십 회원: 무료로 반품/교환 가능",
      "와우멤버십 회원 아닌 경우:",
      "1) [총 주문금액] - [반품 상품금액] = 19,800원 미만인 경우 반품비 5,000원",
      "2) [총 주문금액] - [반품 상품금액] = 19,800원 이상인 경우 반품비 2,500원",
    ],
  },
  {
    id: 2,
    title: "교환/반품 신청 기준일",
    content: [
      "단순변심에 의한 로켓배송 상품의 교환/반품은 제품 수령 후 30일 이내까지, 교환/반품 제한사항에 해당하지 않는 경우에만 가능 (교환/반품 비용 고객부담)",
      "상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회 가능",
    ],
  },
];

//교환/반품 제한사항
export const restrictions = [
  {
    id: 1,
    title: "의류/잡화/수입명품",
    content: [
      "상품의 택(TAG) 및 라벨의 멸실 또는 훼손, 상품의 사용 또는 훼손, 구성품 누락으로 상품의 가치가 현저히 감소된 경우",
    ],
  },
  {
    id: 2,
    title: "계절상품/식품/화장품",
    content: [
      "신선/냉장/냉동 상품의 단순변심의 경우",
      "뷰티 상품 이용 시 트러블(알러지, 붉은 반점, 가려움, 따가움)이 발생하는 경우,",
      "진료 확인서 및 소견서 등을 증빙하면 환불이 가능 (제반비용 고객부담)",
    ],
  },
  {
    id: 3,
    title: "전자/가전/설치상품",
    content: [
      "ㆍ설치 또는 사용하여 재판매가 어려운 경우",
      "ㆍ상품의 시리얼 넘버 유출로 내장된 소프트웨어의 가치가 감소한 경우 (내비게이션, OS시리얼이 적힌 PMP)",
      "ㆍ홀로그램 등을 분리, 분실, 훼손하여 상품의 가치가 현저히 감소하여 재판매가 불가할 경우 (노트북, 데스크탑 PC 등)",
    ],
  },
  {
    id: 4,
    title: "자동차용품",
    content: ["ㆍ상품을 개봉하여 장착한 이후 단순변심인 경우"],
  },
  ,
  {
    id: 5,
    title: "CD/DVD/GAME/BOOK",
    content: ["ㆍ복제가 가능한 상품의 포장 등을 훼손한 경우"],
  },
];

//판매자 정보
export const seller_information = [
  { id: 1, title: "판매자", content: ["쿠팡 1577-]7011"] },
];

//이런 상품은 어때요 데이터
export const how_product = [
  {
    id: 1,
    title: "코멧홈 베이직 차렵이불+베개커버 세트",
    price: 224490,
    discount: "31% 할인",
    review: 124,
    imgsrc: how_photo_lst[0],
  },
  {
    id: 2,
    title: "프리미엄 오가닉 순면 차렵이불 세트",
    price: 189000,
    discount: "25% 할인",
    review: 98,
    imgsrc: how_photo_lst[1],
  },
  {
    id: 3,
    title: "초극세사 따뜻한 겨울 차렵이불",
    price: 249000,
    discount: "40% 할인",
    review: 230,
    imgsrc: how_photo_lst[2],
  },
  {
    id: 4,
    title: "사계절용 통기성 좋은 홑이불",
    price: 89000,
    discount: "20% 할인",
    review: 76,
    imgsrc: how_photo_lst[3],
  },
  {
    id: 5,
    title: "알러지 케어 방수 매트리스 커버",
    price: 69000,
    discount: "35% 할인",
    review: 150,
    imgsrc: how_photo_lst[4],
  },
  {
    id: 6,
    title: "100% 오가닉 코튼 항균 차렵이불",
    price: 49000,
    discount: "18% 할인",
    review: 45,
    imgsrc: how_photo_lst[5],
  },
  {
    id: 7,
    title: "고급형 전기요 온열 패드",
    price: 59000,
    discount: "30% 할인",
    review: 200,
    imgsrc: how_photo_lst[6],
  },
  {
    id: 8,
    title: "초경량 극세사 포근한 겨울 이불",
    price: 89000,
    discount: "27% 할인",
    review: 112,
    imgsrc: how_photo_lst[7],
  },
  {
    id: 9,
    title: "3D 입체 패턴 구스다운 이불",
    price: 129000,
    discount: "22% 할인",
    review: 178,
    imgsrc: how_photo_lst[8],
  },
  {
    id: 10,
    title: "양면 사용 가능한 리버시블 차렵이불",
    price: 29000,
    discount: "50% 할인",
    review: 321,
    imgsrc: how_photo_lst[9],
  },
];

//다른 고객이 함께 본 상품 데이터
export const other_product = [
  {
    id: 1,
    title: "코멧홈 베이직 차렵이불+베개커버 세트",
    price: 224490,
    review: 124,
    imgsrc: other_photo_lst[0],
  },
  {
    id: 2,
    title: "프리미엄 오가닉 순면 차렵이불 세트",
    price: 189000,
    review: 98,
    imgsrc: other_photo_lst[1],
  },
  {
    id: 3,
    title: "초극세사 따뜻한 겨울 차렵이불",
    price: 249000,
    review: 230,
    imgsrc: other_photo_lst[2],
  },
  {
    id: 4,
    title: "사계절용 통기성 좋은 홑이불",
    price: 89000,
    review: 76,
    imgsrc: other_photo_lst[3],
  },
  {
    id: 5,
    title: "알러지 케어 방수 매트리스 커버",
    price: 69000,
    review: 150,
    imgsrc: other_photo_lst[4],
  },
  {
    id: 6,
    title: "100% 오가닉 코튼 항균 차렵이불",
    price: 49000,
    review: 45,
    imgsrc: other_photo_lst[5],
  },
  {
    id: 7,
    title: "고급형 전기요 온열 패드",
    price: 59000,
    review: 200,
    imgsrc: other_photo_lst[6],
  },
  {
    id: 8,
    title: "초경량 극세사 포근한 겨울 이불",
    price: 89000,
    review: 112,
    imgsrc: other_photo_lst[7],
  },
  {
    id: 9,
    title: "3D 입체 패턴 구스다운 이불",
    price: 129000,
    review: 178,
    imgsrc: other_photo_lst[8],
  },
  {
    id: 10,
    title: "양면 사용 가능한 리버시블 차렵이불",
    price: 29000,
    review: 321,
    imgsrc: other_photo_lst[9],
  },
];

//최신순 상품평
export const review_lst = [
  {
    id: 1,
    nickname: "미나리0324",
    date: "2025.03.23",
    choice: "코멧 홈 베이직 차렵이불, 차콜+그레이, 슈퍼싱글",
    content: "가벼운데 생각보다 포근하고 따뜻함",
  },
  {
    id: 2,
    nickname: "바람솔솔",
    date: "2025.03.21",
    choice: "프리미엄 오가닉 순면 차렵이불, 화이트, 퀸",
    content: "부드럽고 촉감이 좋아요. 잘 샀습니다!",
  },
  {
    id: 3,
    nickname: "이불덕후",
    date: "2025.03.20",
    choice: "초극세사 겨울 차렵이불, 네이비, 슈퍼싱글",
    content: "색깔도 예쁘고 보온성도 좋아서 만족해요.",
  },
  {
    id: 4,
    nickname: "하늘바람",
    date: "2025.03.19",
    choice: "사계절용 홑이불, 아이보리, 퀸",
    content: "여름용으로 딱 좋아요. 시원하고 가벼워요!",
  },
  {
    id: 5,
    nickname: "포근해요",
    date: "2025.03.18",
    choice: "알러지 케어 방수 매트리스 커버, 베이지, 킹",
    content: "진짜 방수 잘 됩니다! 아이 키우는 집에 추천",
  },
  {
    id: 6,
    nickname: "달콤이",
    date: "2025.03.17",
    choice: "100% 오가닉 코튼 항균 차렵이불, 라이트핑크, 슈퍼싱글",
    content: "부드럽고 안심하고 사용할 수 있어서 좋아요.",
  },
  {
    id: 7,
    nickname: "블루문",
    date: "2025.03.16",
    choice: "고급형 전기요 온열 패드, 브라운, 퀸",
    content: "온도 조절 잘 되고 따뜻해서 겨울에 최고!",
  },
  {
    id: 8,
    nickname: "나른한오후",
    date: "2025.03.15",
    choice: "초경량 극세사 이불, 와인, 슈퍼싱글",
    content: "너무 가볍고 부드러워서 꿀잠 잡니다!",
  },
  {
    id: 9,
    nickname: "구스사랑",
    date: "2025.03.14",
    choice: "3D 입체 패턴 구스다운 이불, 라이트블루, 킹",
    content: "구스다운이라 정말 따뜻해요. 강추합니다!",
  },
  {
    id: 10,
    nickname: "차분한밤",
    date: "2025.03.13",
    choice: "양면 사용 가능한 리버시블 차렵이불, 차콜, 슈퍼싱글",
    content: "양면이라 기분따라 바꿔 쓸 수 있어 좋아요.",
  },
  {
    id: 11,
    nickname: "해피룸",
    date: "2025.03.12",
    choice: "코멧 홈 베이직 차렵이불, 네이비, 퀸",
    content: "색깔도 고급지고 폭신해서 좋아요.",
  },
  {
    id: 12,
    nickname: "소프트터치",
    date: "2025.03.11",
    choice: "프리미엄 오가닉 순면 차렵이불, 그레이, 슈퍼싱글",
    content: "세탁 후에도 부드러움이 유지돼요.",
  },
  {
    id: 13,
    nickname: "달빛이불",
    date: "2025.03.10",
    choice: "초극세사 겨울 차렵이불, 베이지, 퀸",
    content: "보들보들하고 따뜻해서 좋아요!",
  },
  {
    id: 14,
    nickname: "별빛소녀",
    date: "2025.03.09",
    choice: "사계절용 홑이불, 네이비, 슈퍼싱글",
    content: "통기성이 좋아서 한여름에도 잘 쓸 것 같아요.",
  },
  {
    id: 15,
    nickname: "아늑한밤",
    date: "2025.03.08",
    choice: "알러지 케어 방수 매트리스 커버, 화이트, 퀸",
    content: "진드기 걱정 없이 사용할 수 있어 좋아요!",
  },
  {
    id: 16,
    nickname: "촉촉이",
    date: "2025.03.07",
    choice: "100% 오가닉 코튼 항균 차렵이불, 민트, 슈퍼싱글",
    content: "컬러도 예쁘고 피부에 닿는 느낌이 좋아요.",
  },
  {
    id: 17,
    nickname: "웜하트",
    date: "2025.03.06",
    choice: "고급형 전기요 온열 패드, 와인, 킹",
    content: "정말 따뜻해서 겨울이 걱정 없어요.",
  },
  {
    id: 18,
    nickname: "코코베리",
    date: "2025.03.05",
    choice: "초경량 극세사 이불, 블루, 퀸",
    content: "세탁도 편하고 촉감이 너무 좋아요.",
  },
  {
    id: 19,
    nickname: "구름이불",
    date: "2025.03.04",
    choice: "3D 입체 패턴 구스다운 이불, 네이비, 슈퍼싱글",
    content: "보온성 짱! 호텔 침구 느낌이에요.",
  },
  {
    id: 20,
    nickname: "따뜻한하루",
    date: "2025.03.03",
    choice: "양면 사용 가능한 리버시블 차렵이불, 베이지, 퀸",
    content: "이불 한 장으로 두 가지 느낌 낼 수 있어서 좋아요!",
  },
];

//상품관련 카테고리
export const productcategory = [
  { id: 1, categroy: "거위털/오리털이불" },
  { id: 2, categroy: "양모/알파카이불" },
  { id: 3, categroy: "겹이불/홑이불" },
  { id: 4, categroy: "코타츠이불" },
  { id: 5, categroy: "한실/예단이불" },
  { id: 6, categroy: "이불커버" },
];
