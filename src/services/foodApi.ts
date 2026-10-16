
import { MonAn } from '../types/food';

const API_URL = 'http://localhost:3001/foods';

async function xuLyPhanHoi<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`API món ăn trả về lỗi ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export const foodApi = {
  layDanhSachMonAn: async (): Promise<MonAn[]> => {
    const response = await fetch(API_URL);
    return xuLyPhanHoi<MonAn[]>(response);
  },

  themMonAnMoi: async (monMoi: Omit<MonAn, 'id'>): Promise<MonAn> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(monMoi),
    });
    return xuLyPhanHoi<MonAn>(response);
  },

  capNhatMonAn: async (monCapNhat: MonAn): Promise<MonAn> => {
    const response = await fetch(`${API_URL}/${monCapNhat.id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(monCapNhat),
    });
    return xuLyPhanHoi<MonAn>(response);
  },

  xoaMotMonAn: async (idMonAn: string): Promise<string> => {
    const response = await fetch(`${API_URL}/${idMonAn}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Lỗi xóa món');
    return idMonAn;
  },

  xoaNhieuMonAn: async (danhSachId: string[]): Promise<string[]> => {
    await Promise.all(
      danhSachId.map((id) =>
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      )
    );
    return danhSachId;
  },
};