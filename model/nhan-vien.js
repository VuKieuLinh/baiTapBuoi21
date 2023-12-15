function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    // Validation method
    this.validate = function () {
        // Perform your validation checks here
        // Return true if data is valid, false otherwise

        // Sample validation (you can customize based on your requirements)
        if (!(this.taiKhoan && /^\d{4,6}$/.test(this.taiKhoan))) {
            console.error('Invalid account.');
            return false;
        }

        if (!(this.hoTen && /^[a-zA-Z\s]+$/.test(this.hoTen))) {
            console.error('Invalid name.');
            return false;
        }

        // Add more validation checks for email, password, ngayLam, luongCoBan, chucVu, gioLam, etc.

        return true;
    };
    //5. Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
    this.tinhTongLuong = function () {
        var tongLuong = 0;
        switch (this.chucVu) {
            case 'Giám đốc':
                tongLuong = this.luongCoBan * 3;
                return tongLuong;
            case 'Trưởng phòng':
                tongLuong = this.luongCoBan * 2;
                return tongLuong;
            case 'Nhân viên':
                tongLuong = this.luongCoBan;
                return tongLuong;
            default:
                return 0;
        }
    }
    //6. Xây dựng phương thức xếp loại cho đối tượng nhân viên:
    this.xepLoai = function () {
        var xepLoai;
        switch (true) {
            case this.gioLam >= 192:
                xepLoai = 'Xuất sắc';
                break;
            case this.gioLam >= 176:
                xepLoai = 'Giỏi';
                break;
            case this.gioLam >= 160:
                xepLoai = 'Khá';
                break;
            default:
                xepLoai = 'Trung bình';
                break;
        }
        return xepLoai;
    };
}
