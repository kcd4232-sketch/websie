import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const levelKorean: Record<string, string> = {
  low: '낮음',
  medium: '보통',
  high: '높음',
};

const levelColor: Record<string, string> = {
  low: '#2d7a2d',
  medium: '#b8860b',
  high: '#C41E3A',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, bodyScore, scalpScore, bodyLevel, scalpLevel } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: '이름과 연락처는 필수입니다.' }, { status: 400 });
    }

    // SMTP 설정 확인
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'kcd4232@naver.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      // SMTP 미설정 시 로그만 남기고 성공 응답 (개발 환경)
      console.log('[Diagnosis Email] SMTP not configured. Diagnosis data:', {
        name, phone, bodyScore, scalpScore, bodyLevel, scalpLevel,
      });
      return NextResponse.json({ success: true, message: 'SMTP not configured (dev mode)' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587'),
      secure: parseInt(smtpPort || '587') === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    const html = `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"></head>
<body style="font-family: 'Apple SD Gothic Neo', sans-serif; background:#f4f4f4; padding:20px;">
  <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628; padding:24px; text-align:center;">
      <h1 style="color:#fff; margin:0; font-size:20px;">🔔 자가진단 완료 알림</h1>
      <p style="color:rgba(255,255,255,0.6); margin:8px 0 0; font-size:13px;">${now}</p>
    </div>
    <div style="padding:28px;">
      <h2 style="font-size:16px; color:#333; margin-bottom:16px; border-bottom:1px solid #eee; padding-bottom:12px;">고객 정보</h2>
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr>
          <td style="padding:8px 0; color:#666; font-size:14px; width:80px;">이름</td>
          <td style="padding:8px 0; color:#111; font-size:14px; font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#666; font-size:14px;">연락처</td>
          <td style="padding:8px 0; color:#111; font-size:14px; font-weight:600;">${phone}</td>
        </tr>
      </table>

      <h2 style="font-size:16px; color:#333; margin-bottom:16px; border-bottom:1px solid #eee; padding-bottom:12px;">진단 결과</h2>
      <div style="display:flex; gap:16px; margin-bottom:24px;">
        <div style="flex:1; background:#f8f8f8; border-radius:10px; padding:16px; text-align:center;">
          <div style="font-size:13px; color:#666; margin-bottom:6px;">바디 (BBTT)</div>
          <div style="font-size:28px; font-weight:700; color:#0A1628;">${bodyScore}점</div>
          <div style="display:inline-block; margin-top:8px; padding:4px 12px; border-radius:20px; background:${levelColor[bodyLevel] || '#666'}; color:#fff; font-size:12px; font-weight:600;">${levelKorean[bodyLevel] || bodyLevel}</div>
        </div>
        <div style="flex:1; background:#f8f8f8; border-radius:10px; padding:16px; text-align:center;">
          <div style="font-size:13px; color:#666; margin-bottom:6px;">두피 (헤드스파)</div>
          <div style="font-size:28px; font-weight:700; color:#1a3a5c;">${scalpScore}점</div>
          <div style="display:inline-block; margin-top:8px; padding:4px 12px; border-radius:20px; background:${levelColor[scalpLevel] || '#666'}; color:#fff; font-size:12px; font-weight:600;">${levelKorean[scalpLevel] || scalpLevel}</div>
        </div>
      </div>

      <div style="background:#fff8e1; border-left:4px solid #C41E3A; padding:12px 16px; border-radius:0 8px 8px 0;">
        <p style="margin:0; font-size:13px; color:#555;">상담 연락처: <strong>${phone}</strong> (${name} 고객님)</p>
      </div>
    </div>
    <div style="background:#f4f4f4; padding:16px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#999;">COSMICO KOREA 자가진단 시스템</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"COSMICO 자가진단" <${smtpUser}>`,
      to: notificationEmail,
      subject: `[자가진단] ${name} 고객님 진단 완료 — 바디 ${bodyScore}점(${levelKorean[bodyLevel]}) / 두피 ${scalpScore}점(${levelKorean[scalpLevel]})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Diagnosis Email] Error:', error);
    return NextResponse.json({ success: false, error: 'Email send failed' }, { status: 500 });
  }
}
