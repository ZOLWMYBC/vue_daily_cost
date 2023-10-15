import crypto from 'crypto';
import db from '../db.js';

const userModel = db.user;

const login = async (data) => {
  const user = await userModel.findFirst(data.username);
  if (!user) throw new Error('用户名不存在');
  const hash = crypto.createHash('sha256').update(data.password).digest();
  if (user.passwdHash !== hash.toString()) throw new Error('密码错误');
  const payload = { userId: user.id };
  const token = JSON.stringify(payload).toString('base64');
  return { token };
};

export default {
  login
};
