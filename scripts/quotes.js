const quotes = [ 
    {
        quote: "간단함이 훌륭함의 열쇠다.",
        author: "law Lee"
    },
    {
        quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
        author: "크리스티 메튜슨"
    },
    {
        quote: "바람이 불지 않으면 노를 저어라.",
        author: "윈스턴 처칠"
    },
    {
        quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
        author: "공자"
    },
    {
        quote: "휴식은 게으름도, 멈춤도 아니다",
        author: "헨리 포드"   
    },
    {
        quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다",
        author: "토마스 제퍼슨"  
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다",
        author: "윈스터 처칠"  
    },
    {
        quote: "자기신뢰는 성공의 첫번째 비결이다",
        author: "랄프 에머슨"  
    },
    {
        quote: "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자",
        author: "매트 카메론"  
    },
    {
        quote: "현재와 미래는 어떻게든 연결되어 있다.",
        author: "스티브 잡스"  
    },
    {
        quote: "일은 당신 인생의 많은 부분을 채울 것이다. 그래서 진정 만족을 얻으려면 당신이 생각하기에 위대한 일을 해야한다. 위대한 일을 하는 유일한 방법은 당신이 이 일을 진짜 사랑하는 것이다. 아직 찾지 못했다면 계속해서 찾아라. 타협하지 마라. 모든 일이 그렇듯 제대로 찾았다면 당신 마음이 알게 될 것이다.",
        author: "스티브 잡스"  
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;