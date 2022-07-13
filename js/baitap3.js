/**
 * Bài 3
 * Tổng số nguyên chẵn, lẻ
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1:cho 3 số nguyên
 * num1, num2, num3
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến tongChan
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * tìm các số chẵn 
 * Dùng if (num1 % 2 == 0) để xét xem giá trị có chẵn không
 * nếu chẵn thì cộng tongChan lên 1: tongChan += 1;
 * số lẻ = tổng số - số chẵn: 3 - tongChan
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * tongChan
 */

function tinhTongChan() {
    var num1 = document.getElementById("soT1").value;
    var num2 = document.getElementById("soT2").value;
    var num3 = document.getElementById("soT3").value;
    var tongChan = 0;
    if (num1 % 2 == 0) {
        tongChan += 1;
    }
    if (num2 % 2 == 0) {
        tongChan += 1;
    }
    if (num3 % 2 == 0) {
        tongChan += 1;
    }
    document.getElementById("txtResult3").innerHTML = "Tổng số chẵn: " + tongChan + "<br>Tổng số lẻ: " + (3 - tongChan);
}

document.getElementById("btnTinh3").onclick = tinhTongChan;