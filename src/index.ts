export function transformDate(date: Date, format: string): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
  
    const YYYY = date.getFullYear();
    const YY = YYYY.toString().slice(-2);
    const MM = pad(date.getMonth() + 1);
    const DD = pad(date.getDate());
    const hh = pad(date.getHours() % 12 || 12);
    const HH = pad(date.getHours());
    const mm = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    const A = date.getHours() < 12 ? 'AM' : 'PM';
  
    return format
      .replace(/YYYY/g, YYYY.toString())
      .replace(/YY/g, YY)
      .replace(/MM/g, MM)
      .replace(/DD/g, DD)
      .replace(/hh/g, hh)
      .replace(/HH/g, HH)
      .replace(/mm/g, mm)
      .replace(/ss/g, ss)
      .replace(/A/g, A);
  }
  