from pathlib import Path


THEME_SCRIPT_START = '<script id="cp-theme-detection">'
THEME_SCRIPT_END = "</script>"


def on_post_build(config, **kwargs):
    site_dir = Path(config["site_dir"])

    for html_path in site_dir.rglob("*.html"):
        html = html_path.read_text(encoding="utf-8")
        script_start = html.find(THEME_SCRIPT_START)

        if script_start < 0:
            raise RuntimeError(f"Theme detection script missing from {html_path}")

        script_end = html.find(THEME_SCRIPT_END, script_start)
        if script_end < 0:
            raise RuntimeError(f"Theme detection script is incomplete in {html_path}")

        script_end += len(THEME_SCRIPT_END)
        theme_script = html[script_start:script_end]
        html_without_script = html[:script_start] + html[script_end:]
        head_end = html_without_script.find(">", html_without_script.find("<head"))

        if head_end < 0:
            raise RuntimeError(f"HTML head missing from {html_path}")

        html = (
            html_without_script[: head_end + 1]
            + "\n"
            + theme_script
            + html_without_script[head_end + 1 :]
        )
        html_path.write_text(html, encoding="utf-8")
