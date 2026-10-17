# Smart Tilt–Fall Detection System — GitHub Pages

A responsive project showcase for the IoT-Based Smart Tilt–Fall Detection System using:
- STM32 Blue Pill (STM32F103C8T6-class board)
- MPU-6050 / GY-521 motion sensor
- ESP8266 ESP-01 Wi-Fi module
- Buzzer with a suitable driver stage
- Planned remote status reporting through Firebase and a web interface

## Publish on GitHub Pages

1. Create a **public** repository on GitHub, for example `smart-tilt-fall-detection`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. After deployment, the website URL should be:
   `https://sanjuvc01.github.io/smart-tilt-fall-detection/`
   Change the repository name in the URL if you choose a different name.

## Website features

- Responsive dark navy / yellow electronics-project theme
- Project overview and system architecture
- Hardware inventory and proposed pin map
- Proteus simulation limitations and staged test plan
- Interactive development checklist saved in the current browser using localStorage
- No backend or API keys required for the static site

## Accuracy notes

This is a project showcase and planning site. It does not claim the system is already tested or complete. Pin assignments are proposed starting points and must be verified against the board, firmware, module breakout and power design. ESP8266 needs a stable 3.3 V supply with sufficient peak current. The prototype is not a certified safety device.

## Customize

Edit `index.html` to add your team members, final circuit image, repository link, code links, photos and measured test results. Keep the status labels honest as work progresses.
