/**
 * Bài 1
 * Sắp xếp 3 số nguyên theo thứ tự tăng dần
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: cho 3 số nguyên
 * num1, num2, num3
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến num1, num2, num3, increase, temp
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: Kiểm tra số thứ nhất lớn hơn số thứ 2 => hoán đổi giá trị
 * 2: Kiểm tra số thứ nhất lớn hơn số thứ 3 => hoán đổi giá trị 
 * Chuyển số bé nhất vào num1 (B3 + B4)
 * if (num1 > num2){
 *     temp = num1;
 *     num1 = num2;
 *     num2 = temp;
 * }
 *
 * if (num1 > num3){
 *     temp = num1;
 *     num1 = num3;
 *     num3 = temp;
 * }
 * 3: Kiểm tra số thứ 2 lớn hơn số thứ 3 => hoán đổi giá trị
 * Chuyển số bé nhì vào num2
 * if (num2 > num3){
 *      temp = num2;
 *      num2 = num3;
 *      num3 = temp;
 *  }

 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * increase
 * 
 */

function xepThuTu() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var increase = "";
    var temp = 0;

    if (num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (num1 > num3){
        temp = num1;
        num1 = num3;
        num3 = temp;
    }

    if (num2 > num3){
        temp = num2;
        num2 = num3;
        num3 = temp;
    }

    increase = num1 + "<" + num2 + "<" + num3;
    document.getElementById("txtResult1").innerHTML = increase;
}

document.getElementById("btnTinh1").onclick = xepThuTu;