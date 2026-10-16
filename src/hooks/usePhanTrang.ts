import { useMemo } from 'react';

export function usePhanTrang<T>(danhSach: T[], soPhanTuMoiTrang: number, trangHienTai: number) {
  const tongSoTrang = Math.ceil(danhSach.length / soPhanTuMoiTrang) || 1;

  const danhSachHienThi = useMemo(() => {
    const viTriBatDau = (trangHienTai - 1) * soPhanTuMoiTrang;
    return danhSach.slice(viTriBatDau, viTriBatDau + soPhanTuMoiTrang);
  }, [danhSach, soPhanTuMoiTrang, trangHienTai]);

  return { danhSachHienThi, tongSoTrang };
}
