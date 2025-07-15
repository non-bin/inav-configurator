# Run with `nix-shell --pure`
# eg. `nix-shell --pure --run "npm start"`

{ pkgs ? import <nixpkgs> {} }:
let
  electronDeps = with pkgs; [
    glib
    gtk3
    gdk-pixbuf
    libnotify
    dbus
    nss
    nspr
    atk
    pango
    cairo
    xorg.libX11
    xorg.libXcomposite
    xorg.libXdamage
    xorg.libXrandr
    xorg.libXcursor
    xorg.libXi
    xorg.libXtst
    xorg.libXScrnSaver
    xorg.libxkbfile
    xorg.libxshmfence
    mesa
    libGL
    expat
    libdrm
    cups
    at-spi2-atk
    at-spi2-core
    xorg.libXext
    xorg.libXfixes
    libgbm
    xorg.libxcb
    libxkbcommon
    alsa-lib
  ];
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs
    yarn
    git
    python313
    libudev-zero # To fix install error wanting libudev
    openssh # node-gyp uses git+ssh urls
  ] ++ electronDeps;

  SSL_CERT_FILE = "/etc/ssl/certs/ca-certificates.crt";
  NIX_SSL_CERT_FILE = "/etc/ssl/certs/ca-certificates.crt";

  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath electronDeps;
}
