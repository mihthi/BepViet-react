import { useMemo } from 'react';
import { MonAn, DanhMucMonAn } from '../types/food';

export function useFilter(danhSachMonAn: MonAn[], danhMuc: DanhMucMonAn) {
  return useMemo(() => {
    if (danhMuc === 'Tất cả') {
      return danhSachMonAn;
    }

    return danhSachMonAn.filter((monAn) => monAn.phanLoai === danhMuc);
  }, [danhSachMonAn, danhMuc]);
}
