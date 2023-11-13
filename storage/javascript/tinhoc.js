function kiemTraDapAn(questionNumber) {
    // Lấy giá trị đáp án đúng từ form tương ứng
    var dapAnDung;
    
    // Thiết lập đáp án đúng dựa trên số câu hỏi
    if (questionNumber === 1) {
        dapAnDung = 'A';
    } else if (questionNumber === 2) {
        dapAnDung = 'B';
    }

    // Lấy giá trị đáp án được chọn
    var dapAnChon = document.querySelector(`#quiz-form${questionNumber} input[name="q${questionNumber}"]:checked`);

    // Kiểm tra xem người dùng đã chọn đáp án hay chưa
    if (!dapAnChon) {
        alert('Vui lòng chọn đáp án!');
        return false;
    }

    // So sánh giá trị đáp án được chọn với giá trị đáp án đúng
    if (dapAnChon.value === dapAnDung) {
        alert('Đúng!');
    } else {
        alert('Sai!');
    }

    // Ngăn form submit mặc định
    return false;
}
