
var danhSachNhanVien = new ListNhanVien();





//1. lấy tất cả các giá trịn trên form
var eleForm = document.querySelector("form");
eleForm.onsubmit = function(event){
    //ngăn chặn reload lại trang, hành vi mặc định của thẻ form
    event.preventDefault();
    var listEle = document.querySelectorAll(".form-nhan-vieninput:not([disabled]),.form-nhan-vien select");
    // var taiKhoan,ten,email,ngaySinh,matKhau,toan,ly,hoa,khoaHoc ;
    var nv = {};
    listEle.forEach(function(ele){
        console.log(ele.id,ele.value);
        var thuocTinh = ele.id;
        sv[thuocTinh]=ele.value;
        
    });
    console.log(nv);
    var nhanVien = new NhanVienn(nv.tknv,nv.name,nv.email,nv.password,nv.datepicker,nv.luongCB,nv.chucv,nv.gioLam);
    console.log(nhanVien);
    //tạo object rồi lưu vào dánhachnhanVien
    danhSachNhanVien.themNhanVien(nhanVien);
    console.log(nhanVien);
    //reset form
    eleForm.reset();
    //render table
    renderTable();
};
function renderTable(){
 var eleHtml= ``;
  //lặp qua mảng sin viên để tạo mỗi sinh viên là mỗi thẻ tr và cộn dồn nó vào eleHtml
  danhSachNhanVien.danhSachNhanVien.forEach(function (nv) {
    eleHtml += `
    <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <!-- Add or update other table cells for employee details -->
        <td>${nv.chucVu}</td>
        <td>${nv.luongCoBan}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.xepLoai()}</td>
        <td>
            <button class="btn btn-warning">Sửa</button>
            <button class="btn btn-danger">Xóa</button>
        </td>
    </tr>
    `;
});
 var tbody = document.querySelector(".table-nhan-vien tbody");
 tbody.innerHTML = eleHtml;

 
}