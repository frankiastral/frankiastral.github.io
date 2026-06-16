import qrcode
from PIL import Image

url = "https://frankiastral.github.io/"
qr = qrcode.QRCode(version=1, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)

# Verde neón sobre negro
img = qr.make_image(fill_color="#00ff41", back_color="#020202")
img.save("/home/franco/Projects/frank-web/public/qr_astral.png")

print("\n--- PREVISUALIZACIÓN DEL NODO ASTRAL ---")
qr.print_ascii(invert=True)
