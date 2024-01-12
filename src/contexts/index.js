export { default as AuthProvider } from './AuthContext/AuthContext';
export { default as ProfileProvider } from './ProfileContext/ProfileContext';
export { default as PostProvider } from './PostContext/PostContext';
export { default as SocketProvider } from './SocketContext/SocketContext';
export const api = import.meta.env.VITE_BASE_URL;