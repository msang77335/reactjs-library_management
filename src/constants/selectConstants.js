function range(start, end) {
   var ans = [];
   for (let i = start; i <= end; i++) {
      ans.push({ value: i, label: i });
   }
   return ans;
}
const selectOptions = {
   publishingYear: () => {
      const years = range(
         new Date().getFullYear() - 10,
         new Date().getFullYear()
      );
      return years;
   },
   employeeYears: () => {
      const years = range(
         new Date().getFullYear() - 50,
         new Date().getFullYear() - 18
      );
      return years;
   },
   staffsDegree: () => {
      return [
         { value: "Tú Tài", label: "Tú Tài" },
         { value: "Trung Cấp", label: "Trung Cấp" },
         { value: "Cao Đẳng", label: "Cao Đẳng" },
         { value: "Đại Học", label: "Đại Học" },
         { value: "Thạc Sĩ", label: "Thạc Sĩ" },
         { value: "Tiến Sĩ", label: "Tiến Sĩ" },
      ];
   },
   staffsPosition: () => {
      return [
         { value: "Nhân Viên", label: "Nhân Viên" },
         { value: "Phó Phòng", label: "Phó Phòng" },
         { value: "Trưởng Phòng", label: "Trưởng Phòng" },
         { value: "Phó Giám Đốc", label: "Phó Giám Đốc" },
         { value: "Giám Đốc", label: "Giám Đốc" },
      ];
   },
   staffsPart: () => {
      return [
         { value: "Thủ Thư", label: "Thủ Thư" },
         { value: "Thủ Kho", label: "Thủ Kho" },
         { value: "Thủ Quỹ", label: "Thủ Quỹ" },
         { value: "Ban Giám Đốc", label: "Ban Giám Đốc" },
      ];
   },
   mounts: () => {
      return [
         { value: 1, label: "January" },
         { value: 2, label: "February" },
         { value: 3, label: "March" },
         { value: 4, label: "April" },
         { value: 5, label: "May" },
         { value: 6, label: "June" },
         { value: 7, label: "July" },
         { value: 8, label: "August" },
         { value: 9, label: "September" },
         { value: 10, label: "October" },
         { value: 11, label: "November" },
         { value: 12, label: "December" },
      ];
   },
};
export default selectOptions;
