import os

lines = []
offsets = []

def add(data):
    offsets.append(len(b"".join(lines)))
    lines.append(data)

header = b"%PDF-1.4\n"

add(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
add(b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
add(
    b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
    b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n"
)
stream = (
    b"BT /F1 26 Tf 72 700 Td (Ali Ragab Ghonim) Tj ET\n"
    b"BT /F2 13 Tf 72 672 Td (Backend Software Engineer - Java / Spring Boot / AI Systems) Tj ET\n"
    b"BT /F2 12 Tf 72 620 Td (This is a placeholder CV.) Tj ET\n"
    b"BT /F2 12 Tf 72 596 Td (Replace public/Ali-Ragab-Ghonim-CV.pdf with your real resume.) Tj ET\n"
)
add(b"4 0 obj\n<< /Length %d >>\nstream\n%s\nendstream\nendobj\n" % (len(stream), stream))
add(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
add(b"6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

body = b"".join(lines)
xref_pos = len(header) + len(body)

xref = ["xref", "0 7", "0000000000 65535 f "]
for off in offsets:
    xref.append("%010d 00000 n " % off)
trailer = ["trailer", "<< /Size 7 /Root 1 0 R >>", "startxref", str(xref_pos), "%%EOF"]

pdf = header + body + ("\n".join(xref) + "\n" + "\n".join(trailer)).encode()
out = os.path.join(os.path.dirname(__file__), "..", "public", "Ali-Ragab-Ghonim-CV.pdf")
with open(out, "wb") as f:
    f.write(pdf)
print("wrote", out, len(pdf), "bytes")
