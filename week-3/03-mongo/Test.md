# Web Activity Logger
 
A web activity monitoring tool that records and logs user interactions on websites using Selenium WebDriver and Streamlit.
 
## Features
 
- Real-time monitoring of web interactions
- Live console view of user activities
- Record and save interaction logs
- Download or delete saved recordings
- Secure login system
- Support for masked data handling
 
## Requirements
 
```
selenium
streamlit
webdriver-manager
```
 
## Installation
 
1. Clone this repository
2. Install dependencies:
   ```bash
   pip install selenium streamlit webdriver-manager
   ```
 
## Usage
 
1. Start the Streamlit application:
   ```bash
   streamlit run help.py
   ```
 
2. Login with credentials:
   - Username: sam
   - Password: 1234
 
3. Enter a website URL to monitor
4. Optionally provide a custom name for the recording
5. Click "Start Recording" to begin monitoring
6. View live interactions in the console
7. Stop recording when finished
8. Access saved recordings from the recordings section
 
## Components
 
- `test.py`: Core WebDriver monitoring implementation
- `help.py`: Streamlit interface and recording management
- `user_interactions.log`: Example log file format
 
## Recorded Events
 
- Button clicks
- Link clicks
- Form input entries
- Page navigation
- Password field entries (masked)
 
## Security Features
 
- Password-protected interface
- Masked sensitive data
- Secure logging practices
 
## Notes
 
- Chrome WebDriver is required
- Ensure proper permissions for file operations
- Some websites may block automated access