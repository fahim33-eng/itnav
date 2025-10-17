import { HomePageData, Member, Graduate } from '@/types';
import { mockHomeData, mockMembers, mockGraduates } from './mockData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.warn(`Failed to fetch ${endpoint}, using fallback data:`, error);
    return fallbackData;
  }
}

export async function getHomeData(): Promise<HomePageData> {
  return fetchWithFallback('/api/home', mockHomeData);
}

export async function getMembers(): Promise<Member[]> {
  return fetchWithFallback('/api/members', mockMembers);
}

export async function getGraduates(): Promise<Graduate[]> {
  return fetchWithFallback('/api/graduates', mockGraduates);
}

