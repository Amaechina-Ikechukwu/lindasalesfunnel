'use client'
 
import { useSearchParams } from 'next/navigation'


export default function Page() {
  const searchParams = useSearchParams(); // Use array destructuring to get searchParams
  const search = searchParams.get('code');

  async function getUserToken() {
    const redirectUri = 'https://aa8b-129-205-113-160.ngrok-free.app/instagram/confirm';

    try {
      const res = await fetch('http://localhost:3003/instagram/confirm?code='+search, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      console.log(data);

      // Handle the Instagram response data as needed
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
      <button
        onClick={getUserToken}
        className="bg-blue-500 w-full text-white rounded-md hover:text-white shadow-md p-4 drop-shadow-xl hover:scale-105 active:scale-95 scale-100 hover:transition ease-in-out delay-50 text-center"
      >
        Complete Connection
      </button>
    </>
  );
}
