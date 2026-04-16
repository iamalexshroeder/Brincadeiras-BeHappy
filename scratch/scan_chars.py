import re
import os

def scan_file(filepath):
    valid_chars = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 \t\n\r.,!?;:\"'()[]{}/*-+_ÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇáàâãéèêíìîóòôõúùûç#&%@$|<>=\"")
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    anomalies = []
    for i, line in enumerate(lines):
        line_num = i + 1
        found_chars = []
        for char in line:
            if char not in valid_chars and ord(char) > 127:
                found_chars.append(char)
        if found_chars:
            anomalies.append({
                "line": line_num,
                "chars": found_chars,
                "content": line.strip()
            })
    return anomalies

if __name__ == "__main__":
    target = "lib/data/biblioteca.ts"
    results = scan_file(target)
    if not results:
        print("No anomalies found based on target charset.")
    for res in results:
        print(f"Line {res['line']}: {res['chars']} -> {res['content']}")
