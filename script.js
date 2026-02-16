// Global variables
const validNames = ['midori', 'minh', 'min', 'hồng minh'];
let userName = '';

const letterTemplate = `Hi {NAME}, Happy New Year, I got something to tell u :))) 

Gần đây tui cứ nghĩ mãi, về tình yêu, về mình, về những kết nối…

 Là một đứa lớn lên với định nghĩa về tình thương thật mơ hồ và thiếu đi những kết nối sâu. Được có cơ hội tỏ bày tình thương thật sự quý giá và cũng là thử thách với tui. Quý giá vì tôi chẳng mấy khi có cơ hội thành đôi và trải nghiệm tình yêu ấy nhiều thật nhiều. Thử thách vì càng lớn, mình biết, hình thái tình yêu có lẽ cũng khác đi và mình lại học lại, học thêm về nó dù luôn mơ hồ.

 Tui biết, tình cảm là thứ không thể cưỡng cầu, khó để dự đoán, không thể cứ mong đợi theo cái tưởng tượng của mình, nó supposely một ngày tìm đến, nhẹ nhàng, dễ dàng tựa như hít thở, tự nhiên và bình an. Tui tin, điều gì phù hợp sẽ được tìm thấy, trong tâm thế không quá mong đợi, ví dụ như mình đến một lúc nhận ra mình thương và muốn chọn luôn ở cạnh một ai đó, nhiều hơn mình tưởng ở lúc ban đầu :))) 

 Dù tui cũng hay tự hỏi, nếu mình không thử nỗ lực tìm kiếm, cố thêm một chút, hy vọng lâu ơn một chút thì mình sẽ tìm được hay không. Tui không có câu trả lời, và không ai có câu trả lời cả vì nó có ti tỉ biến số quyết định, và trong đó, nỗ lực và sự kiểm soát của bản thân là một phần, nhỏ….
 
 Tui cũng chẳng tin phép màu ở một chặng đường dài, tui chỉ biết tận hưởng những trải nghiệm dù hay hoặc dở, xảy đến với mình vì ban đầu trong có lẽ gặp gỡ ai đó là phép màu. Hoặc cũng có lẽ, định nghĩa real love và relationship được hooman sáng tạo ra để có gì đó bám lấy, duy trì sự sống, như một đức tin, mà không có một công thức nào, hình hài nào cho tất cả.
 
 Tóm lại là, thứ duy nhất tui thấy mình có thể kiểm soát, là buông bỏ bớt, cái hy vọng ảo tưởng mình sẽ chinh phục được ai đó, thay đổi mình, thay đổi người, cho phép cái tôi cố vẫy vùng rằng mình kiên trì điều gì đó lớn lao. Điều đó thật cũng làm mình và người kia dần kiệt sức mà đáng ra, thời gian đó, mình có thể đã làm được biết bao việc cho bản thân, cho mình nhiều sự lưa chọn phát triển.
 
 Luyên thuyên đến đây thôi, vì những dòng này, có lẽ để tôi đọc là chính.
 
 Về Minh, tui cũng không biết sao, ngày hôm đó ở Phan Thiết tui lại nói thích Minh nữa, có lẽ tui thấy bạn thân thuộc và an toàn để tôi có thể nói hết mọi thứ, ngay vừa xuất hiện trong suy nghĩ. Điều này làm 2 đứa cố gắng đi cùng nhau tìm câu trả lời :)) ròi cũng hơi đuối. Nhưng nhìn lại, tui thấy may mắn, biết ơn và vui vì có Minh xuất hiện. Mang theo nhiều cảm hứng và góc nhìn cho mình.`;

// Functions
function checkName() {
    const input = document.getElementById('nameInput');
    const errorMsg = document.getElementById('error-msg');
    const inputName = input.value.trim().toLowerCase();

    if (validNames.includes(inputName)) {
        userName = input.value.trim();
        if (errorMsg) errorMsg.style.display = 'none';
        input.classList.remove('error');
        showLetter();
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
        input.classList.add('error');
    }
}

function showLetter() {
    const s1 = document.getElementById('section-1');
    const s2 = document.getElementById('section-2');
    
    if(s1) s1.style.display = 'none';
    if(s2) s2.style.display = 'block';
    
    const letterText = letterTemplate.replace('{NAME}', userName);
    typeWriter(letterText, 0);
}

function typeWriter(text, index) {
    const letterElement = document.getElementById('letter-text');
    if (!letterElement) return;

    if (index < text.length) {
        letterElement.textContent = text.substring(0, index + 1);
        const speed = 5000 / text.length; 
        setTimeout(() => typeWriter(text, index + 1), speed);
    }
}

function downloadLetter() {
    // Lưu lại tiêu đề trang cũ
    const originalTitle = document.title;
    // Đặt tên file khi in ra PDF
    document.title = `Thu_Gui_${userName}`;
    
    // Lệnh in của trình duyệt (Người dùng chọn "Save as PDF")
    window.print();
    
    // Trả lại tiêu đề cũ
    document.title = originalTitle;
}

// Event listeners - QUAN TRỌNG: Đã đóng ngoặc đầy đủ tại đây
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkName();
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', checkName);
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadLetter);
    }
});