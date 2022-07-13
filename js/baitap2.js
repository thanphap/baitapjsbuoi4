/**
 * Bài 2
 * Chào hỏi
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Cho các giá trị lựa chọn tương ứng
 * B(bố), M(mẹ), A(anh trai), E(em gái)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến user, loiChao
 * B2: gán giá trị cho biến lấy giá trị từ form
 * B3: Lập công thức tính toán
 * Sử dụng switch...case... để đưa ra các lựa chọn
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * loiChao
 * 
 */

function xulyChao() {
    var user = document.getElementById("user").value;
    var loiChao = "";
    switch (user) {
        case "B":
            loiChao = "Xin chào bố"
            break;
        case "M":
            loiChao = "Xin chào mẹ"
            break;
        case "A":
            loiChao = "Xin chào anh trai"
            break;
        case "E":
            loiChao = "Xin chào em gái"
            break;
        default:
            loiChao = "Vui lòng chọn thành viên"
            break;
    }
    document.getElementById("txtResult2").innerHTML = loiChao;
}

document.getElementById("btnTinh2").onclick = xulyChao;
