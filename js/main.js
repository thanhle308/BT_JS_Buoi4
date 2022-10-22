
//  Bài 1
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
//    - nhập vào 3 số nguyên

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     dungf lệnh if else để tìm ra thứ tự

// Khối 3: Output (kết quả đạt được)
//     sắp xếp

function sapxep() {
    var mid, max, min;
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = Number(document.getElementById("num3").value);

    // Nhập không đủ 3 số thì nhắc nhở 
    if (a == "" || b == "" || c == "") {
        document.getElementById("txtsx").innerHTML = "Hãy nhập đủ 3 số !";

        // Khi nhậop đủ thì thực hiện so sánh sắp xếp 
    } else {
        // Nếu a lớn hơn b và c thì a là sô lớn nhất = max rồi so sánh b và c 
        if (a > b && a > c) {
            max = a;
            // Nếu b > c thì c là số bé nhất = min và b là số giữa 
            if (b > c) {
                mid = b;
                min = c;
            } else {
                min = b;
                mid = c;
            }
            // Ngược lại nếu a bé hơn b và c thì min = a
        } else if (a < b && a < c) {
            min = a;
            if (b > c) {
                max = b;
                mid = c;
            } else {
                max = c;
                mid = b;
            }
            // ngươc lại thì a là số ở giữa 
        } else {
            mid = a;
            if (b > c) {
                max = b;
                min = c;
            } else {
                max = c;
                min = b;
            }
        }
        document.getElementById("txtsx").innerHTML = min + " " + mid + " " + max;
    }
}

document.getElementById("btnsx").onclick = sapxep;

//  Bài 2
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
//    - lựa chọn người chào hỏi

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     dùng lệnh switch

// Khối 3: Output (kết quả đạt được)
//     chào hỏi

function chaohoi() {
    var ai = document.getElementById("selUser").value;
    switch (ai) {
        case ai = "B":
            document.getElementById("txtchao").innerHTML = " Xin chào Bố!";
            break;
        case ai = "M":
            document.getElementById("txtchao").innerHTML = " Xin chào Mẹ!";
            break;
        case ai = "A":
            document.getElementById("txtchao").innerHTML = " Xin chào Anh!";
            break;
        case ai = "E":
            document.getElementById("txtchao").innerHTML = " Xin chào Em!";
            break;
        default:
            document.getElementById("txtchao").innerHTML = " Xin chào người lạ !";
            break;
    }
}
document.getElementById("btnchao").onclick = chaohoi;

//  Bài 3
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
//    - nhập vào 3 số nguyên

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Chia hết cho 2 thì là số chẵn ngược lại thì là số lẽ

// Khối 3: Output (kết quả đạt được)
//     In ra có bao nhiêu số achawxn và bao nhiêu số lẽ.

function chanle() {
    var chan = 0, le = 0;
    var numcl1 = Number(document.getElementById("numcl1").value);
    var numcl2 = Number(document.getElementById("numcl2").value);
    var numcl3 = Number(document.getElementById("numcl3").value);

    if (numcl1 == "" || numcl2 == "" || numcl3 == "") {
        document.getElementById("txtcl").innerHTML = "Hãy nhập đủ 3 số"
    } else {
        if ((numcl1 % 2) == 0) {
            chan += 1;
        } else {
            le += 1;
        }
        if ((numcl2 % 2) == 0) {
            chan += 1;
        } else {
            le += 1;
        }

        if ((numcl3 % 2) == 0) {
            chan += 1;
        } else {
            le += 1;
        }
        document.getElementById("txtcl").innerHTML = "Có " + chan + " số chẵn , " + le + " số lẽ";
    }

}
document.getElementById("btncl").onclick = chanle;

//  Bài 4
/* ----------------------------- Mô hình 3 khối ----------------------------- */
// Khối 1: input (dữ liệu được cung cấp)
//    - nhập vào 3 cạnh

// Khối 2: Các bước xử lý 
//     B1: Khai báo biến và lưu giá trị input
//     B2:Lập công thức tính toán
//     Nếu 3 canh bằng thì là tam giác dều, 2 canh bằng thì là tam giác cân ,nếu bình phương 1 canh bằng tổng  bình phương 2 canh thì là tam giác vuông , cònb lại thì là tam giác thương

// Khối 3: Output (kết quả đạt được)
//     In ra là tam giác gì
function dudoan() {
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);
    if (canh1 == "" || canh2 == "" || canh3 == "") {
        document.getElementById("txtdd").innerHTML = "Hãy nhập đủ cả 3 cạnh của tam giác !";

    } else {
        if (
            ((canh1 + canh2) > canh3) &&
            ((canh2 + canh3) > canh1) &&
            ((canh3 + canh1) > canh2)
        ) {
            if ((canh1 == canh3) && (canh2 == canh3)) {
                document.getElementById("txtdd").innerHTML = "Tam giác đều !";
            } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
                document.getElementById("txtdd").innerHTML = "Tam giác cân !";

            } else if (
                (Math.pow(canh1, 2) == ((Math.pow(canh2, 2)) + (Math.pow(canh3, 2)))) ||
                (Math.pow(canh2, 2) == ((Math.pow(canh1, 2)) + (Math.pow(canh3, 2)))) ||
                (Math.pow(canh3, 2) == ((Math.pow(canh1, 2)) + (Math.pow(canh2, 2))))
            ) {
                document.getElementById("txtdd").innerHTML = "Tam giác vuông !";
            } else {
                document.getElementById("txtdd").innerHTML = "Tam giác thường !";

            }
        } else {
            document.getElementById("txtdd").innerHTML = "Độ dài tam giác không hợp lệ !"
        }
    }


}
document.getElementById("btndd").onclick = dudoan;