import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(229, 9, 20, 0.4);
    z-index: 10;
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  transition: transform 0.3s ease;
  background: #333;
  
  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

export const CardInfo = styled.div`
  padding: 12px 14px;
  color: white;
  background: #1a1a1a;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const CardYear = styled.span`
  font-size: 14px;
  color: #888;
`;

export const CardRating = styled.span`
  font-size: 14px;
  color: #ffd700;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RatingStar = styled.span`
  font-size: 16px;
`;