import argparse

#     <area target="_blank" alt="Simone Magnani" title="Simone Magnani" href="https://rising.fbk.eu/people/simone-magnani" coords="157,695,289,175" shape="rect">

def main():
    a = argparse.ArgumentParser()
    a.add_argument('-f', '--mappings_file', type=str, help='File to convert')
    args = a.parse_args()


    # Convert "coords" into percentages
    # coords are x1, y1, x2, y2
    # x size is 1600
    # y size is 811

    with open(args.mappings_file, 'r') as f:
        old_lines = f.readlines()
        new_lines = []
        for line in old_lines:
            if 'coords' in line:
                coords = line.split('coords=')[1].split('"')[1].split(',')
                for i in range(len(coords)):
                    coords[i] = int(coords[i])
                    if i % 2 == 0:
                        coords[i] /= 1600
                    else:
                        coords[i] /= 811
                    coords[i] *= 100
                    coords[i] = f"{coords[i]:.2f}%"
                new_lines.append(line.replace(line.split('coords=')[1].split('"')[1], ','.join(coords)))
            else:
                new_lines.append(line)
        print(''.join(new_lines))
        


if __name__ == "__main__":
    main()