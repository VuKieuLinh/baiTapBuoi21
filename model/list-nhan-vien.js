function ListNhanVien(){
    this.danhSachNhanVien = [];
    //2. Thêm nhân viên mới
    this.themNhanVien = function (nv) {
        this.danhSachNhanVien.push(nv);
    };
    //7. Xóa nhân viên 
    this.xoaNhanVien = function (tk) {
        var newDanhSachNhanVien = this.danhSachNhanVien.filter(function(nv){
          
            return !(nv.taiKhoan===tk);
        });
        //gán lại danh sách Nhân viên
        this.danhSachNhanVien = newDanhSachNhanVien;
    };
    //8. Cập nhật nhân viên (có validation)
    this.capNhatNhanVien = function (nv) {
        var index = this.taiKhoan.findIndex(function (nhanVien){
            //tìm vị trí index dựa vào tk
            return nhanVien.taiKhoan===nv.taiKhoan;
        });
        // không tìm thấy thì dừng
        if (index===-1) return;
        //nếu tìm thấy thì cập nhật giá trị index
        this.danhSachNhanVien[index] = nv;

     };
     //9. Tìm Nhân Viên theo loại (xuất săc, giỏi, khá...) và hiển thị
     this.timKiemSinhVien = function (xepLoai) {
        if (['Xuất sắc', 'Giỏi', 'Khá', 'Trung bình'].includes(xepLoai)) {
            return this.danhSachNhanVien.filter(function (nv) {
                return nv.xepLoai() === xepLoai;
            });
        } else {
            console.error('Loại nhân viên không hợp lệ');
            return [];
        }
    };

}
var listNhanVien =new ListNhanVien();
var nvA = new NhanVien("1","Nguyễn Văn A","abc@gmail.com","12345","28",1000000,"Sếp","129");
var nvB = new NhanVien("2","Nguyễn Văn B","abc@gmail.com","12345","28",1000000,"Trưởng phòng","160");
var nvC = new NhanVien("3","Nguyễn Văn C","abc@gmail.com","12345","28",1000000,"Nhân viên","180");
var nvD = new NhanVien("4","Nguyễn Văn D","abc@gmail.com","12345","28",1000000,"Nhân viên","190");
var nvE = new NhanVien("5","Nguyễn Văn E","abc@gmail.com","12345","28",1000000,"Nhân viên","198");
var nvF = new NhanVien("6","Nguyễn Văn F","abc@gmail.com","12345","28",1000000,"Nhân viên","200");
var nvG = new NhanVien("7","Nguyễn Văn G","abc@gmail.com","12345","28",1000000,"Nhân viên","139");
var nvH = new NhanVien("8","Nguyễn Văn H","abc@gmail.com","12345","28",1000000,"Nhân viên","290");
listNhanVien.themNhanVien(nvA);
listNhanVien.themNhanVien(nvB);
listNhanVien.themNhanVien(nvC);
listNhanVien.themNhanVien(nvD);
listNhanVien.themNhanVien(nvE);
listNhanVien.themNhanVien(nvF);
listNhanVien.themNhanVien(nvG);
listNhanVien.themNhanVien(nvH);


console.log("thêm nhân viên",listNhanVien.danhSachNhanVien);
listNhanVien.xoaNhanVien("1");
console.log("xóa nhân viên tk 1", listNhanVien.danhSachNhanVien);
nvB.luongCoBan=6000000;
console.log("update lương cơ bản nhân viên B", listNhanVien.capNhatNhânVien.nvB);
console.log("danh sách nhân viên sau khi cập nhật", listNhanVien.danhSachNhanVien);

var xuatSacEmployees = listNhanVien.timKiemSinhVien('Xuất sắc');
console.log('Nhân viên xuất sắc:', xuatSacEmployees);

var gioiEmployees = listNhanVien.timKiemSinhVien('Giỏi');
console.log('Nhân viên giỏi:', gioiEmployees);

var khaEmployees = listNhanVien.timKiemSinhVien('Khá');
console.log('Nhân viên khá:', khaEmployees);

var trungBinhEmployees = listNhanVien.timKiemSinhVien('Trung bình');
console.log('Nhân viên trung bình:', trungBinhEmployees);