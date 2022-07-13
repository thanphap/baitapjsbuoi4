/**
 * Bài 4
 * Xét loại tam giác
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: cho 3 cạnh tam giác
 * canh1, canh2, canh3
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến canh1, canh2, canh3, tongCanhGoc, loaiTamGiac, canhMax
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: lập công thức tính toán
 * 1: tìm cạnh lớn nhất (cạnh huyền tam giác vuông): canhMax
 * 2: tính tổng bình phương hai cạnh còn lại (cạnh góc vuông): tongCanhGoc
 * 3: xét tam giác đều (3 cạnh bằng nhau): 
 * if (canh1 == canh2 && canh1 == canh3)
 * 4: xét tam giác vuông (bình phương cạnh góc vuông = cạnh huyền):
 * else if (tongCanhGoc == Math.pow(canhMax, 2))
 * 5: xét tam giác cân (2 cạch bất kỳ bằng nhau)
 * else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3)
 * 6: khác trường hợp trên là tam giác thường
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * loaiTamGiac
 * 
 */

function xetTamGiac() {
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);
    var tongCanhGoc = 0;
    var loaiTamGiac = "";
    var canhMax = canh1;

    if (canhMax < canh2) {
        canhMax = canh2;
    }
    if (canhMax < canh3) {
        canhMax = canh3;
    }
    console.log(canhMax);
    
    if (canh1 != canhMax) {
        tongCanhGoc = Math.pow(canh1, 2);
    }
    if (canh2 != canhMax) {
        tongCanhGoc += Math.pow(canh2, 2);
    }
    if (canh3 != canhMax) {
        tongCanhGoc += Math.pow(canh3, 2);
    }
    console.log(tongCanhGoc);

    if (canh1 == canh2 && canh1 == canh3) {
        loaiTamGiac = "Tam giác đều";
    }
    else if (tongCanhGoc == Math.pow(canhMax, 2)) {
        loaiTamGiac = "Tam giác vuông";
    }
    else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        loaiTamGiac = "Tam giác cân";
    }
    else {
        loaiTamGiac = "Tam giác thường";
    }

    document.getElementById("txtResult4").innerHTML = loaiTamGiac;
}

document.getElementById("btnTinh4").onclick = xetTamGiac;