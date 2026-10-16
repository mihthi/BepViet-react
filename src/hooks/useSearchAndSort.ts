import { useMemo } from 'react';
import { MonAn } from '../types/food';

type KieuSapXep = 'mac-dinh' | 'gia-tang' | 'gia-giam' | 'ten-az';

export function useSearchAndSort(
  danhSachMonAn: MonAn[],
  tuKhoa: string,
  kieuSapXep: KieuSapXep
) {
  return useMemo(() => {
    const tuKhoaNho = tuKhoa.toLowerCase().trim();

    const ketQua = danhSachMonAn.filter((monAn) => {
      return (
        monAn.ten.toLowerCase().includes(tuKhoaNho) ||
        monAn.moTa.toLowerCase().includes(tuKhoaNho)
      );
    });

    if (kieuSapXep === 'gia-tang') {
      return [...ketQua].sort((monA, monB) => monA.gia - monB.gia);
    }

    if (kieuSapXep === 'gia-giam') {
      return [...ketQua].sort((monA, monB) => monB.gia - monA.gia);
    }

    if (kieuSapXep === 'ten-az') {
      return [...ketQua].sort((monA, monB) => monA.ten.localeCompare(monB.ten, 'vi'));
    }

    return ketQua;
  }, [danhSachMonAn, tuKhoa, kieuSapXep]);
}
