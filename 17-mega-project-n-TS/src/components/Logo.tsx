interface Width {
    width?: string; // Optional prop
}

function Logo({ width = '100px' }: Width) {
    return (
        <div style={{ width }}>
            Logo
        </div>
    );
}

export default Logo;
