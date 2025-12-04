from pypdf import PdfReader

reader = PdfReader("Myresune-Abu.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

with open("resume_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
