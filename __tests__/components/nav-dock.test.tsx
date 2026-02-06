import { render, screen } from '@testing-library/react';
import { DockNav } from '@/components/ui/nav-dock';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('DockNav', () => {
  it('renders all navigation items', () => {
    render(<DockNav />);
    
    expect(screen.getByLabelText('Navigate to home section')).toBeInTheDocument();
    expect(screen.getByLabelText('Navigate to about section')).toBeInTheDocument();
    expect(screen.getByLabelText('Navigate to projects section')).toBeInTheDocument();
    expect(screen.getByLabelText('Navigate to resume section')).toBeInTheDocument();
    expect(screen.getByLabelText('Navigate to contact section')).toBeInTheDocument();
  });

  it('has proper ARIA labels', () => {
    render(<DockNav />);
    
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('has accessible links', () => {
    render(<DockNav />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('aria-label');
    });
  });
});
