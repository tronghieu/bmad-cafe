from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        
        print("Navigating to http://localhost:3000...")
        try:
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')
            
            # Wait a bit for animations
            time.sleep(2)
            
            screenshot_path = 'presentation-preview.png'
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")
            
            # Check for the BMAD title
            title = page.locator('h1').inner_text()
            print(f"Page Title: {title}")
            
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
