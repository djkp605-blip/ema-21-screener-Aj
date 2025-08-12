// src/api.js
import { DHAN_ACCESS_TOKEN } from './config';

export async function getProfile() {
  try {
    const response = await fetch("https://api.dhan.co/v2/user", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "access-token": DHAN_ACCESS_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Profile data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
                                             }
