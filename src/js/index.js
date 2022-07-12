// step1 요구사항 구현을 위한 전략


// TODO 메뉴 추가
// 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// 총 메뉴 갯수를 count하여 상단에 보여준다.
// 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// 사용자 입력값이 빈 값이라면 추가되지 않는다.


// TODO 메뉴 수정
// 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴를 수정할 수 있는 모달창이 뜬다. -- 추후 팝업으로 바꾸자
// 모달창에서 신규 메뉴명을 받고, 확인 버튼을 누르면 메뉴명이 수정된다.


// TODO 메뉴 삭제
// 메뉴 삭제 버튼 클릭 이벤트를 받고, confirm 창을 띄운다.
// 확인 버튼을 클릭하면 메뉴가 삭제된다.

const $ = (selector) => document.querySelector(selector);

function App() {
    // form 태그가 자동으로 전송되는 것을 막아준다.
    document
        .querySelector("#espresso-menu-form")
        .addEventListener("submit", (e) => {
            e.preventDefault();
        });

    // 메뉴 이름을 입력받는 것
    document
        .querySelector("#espresso-menu-name")
        .addEventListener("keypress", (e) => {
            // console.log(e.key);

            if(e.key === "Enter") {
                let inputValue = document.querySelector(
                  "#espresso-menu-name"
                ).value;
                
            
                console.log(inputValue);
            }
        });
}

App();

